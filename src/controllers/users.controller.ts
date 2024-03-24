import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/user/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../dtos/user/login-user.dto';
import { Request, Response } from 'express';
import { RetrieveUserDto } from '../dtos/user/retrieve-user.dto';

@ApiTags('users')
@Controller('api/users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  @Get()
  public async findAll(): Promise<RetrieveUserDto[]> {
    return await this.userService.findAll();
  }

  @Get('user')
  public async user(
    @Req() request: Request,
  ): Promise<RetrieveUserDto> {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) throw new UnauthorizedException();

      return await this.userService.findById(data.id);
    } catch (exception) {
      throw new UnauthorizedException();
    }
  }

  @Post()
  public async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RetrieveUserDto> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);

    return await this.userService.create(createUserDto);
  }

  @Post('login')
  public async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const user = await this.userService.findByUsername(loginUserDto.username);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!await bcrypt.compare(loginUserDto.password, user.password)) {
      throw new BadRequestException('Invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });

    return 'logged in';
  }

  @Post('logout')
  public async logout(
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    response.clearCookie('jwt');

    return 'logged out';
  }
}
