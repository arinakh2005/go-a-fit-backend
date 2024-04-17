import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../dtos/user/login-user.dto';
import { Request, Response } from 'express';
import { RetrieveUserDto } from '../dtos/user/retrieve-user.dto';
import { AuthGuard } from './auth.guard';
import { AuthorizedUserDto } from '../dtos/user/authorized-user.dto';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  @UseGuards(AuthGuard)
  @Get('user')
  public async user(
    @Req() request: Request,
  ): Promise<RetrieveUserDto> {
    try {
      return await this.userService.findById(request.user['id']);
    } catch (exception) {
      throw new UnauthorizedException();
    }
  }

  @Post('login')
  public async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<AuthorizedUserDto> {
    const user = await this.userService.findByUsername(loginUserDto.username);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!await bcrypt.compare(loginUserDto.password, user.password)) {
      throw new BadRequestException('Invalid credentials');
    }

    const authToken = await this.jwtService.signAsync({ id: user.id });

    return { user, authToken };
  }

  @Post('logout')
  public async logout(
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    return 'logged out';
  }
}
