import { Body, Controller, Get, Param, Post, Req, UploadedFile, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/user/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import { RetrieveUserDto } from '../dtos/user/retrieve-user.dto';
import { ApiImageFile } from '../decorators/api-file.decorator';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('users')
@Controller('api/users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly userService: UserService) { }

  @Get()
  public async findAll(): Promise<RetrieveUserDto[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  public async findById(
    @Param('id') id: string,
  ): Promise<RetrieveUserDto> {
    return await this.userService.findById(id);
  }

  @Post()
  public async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RetrieveUserDto> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);

    return await this.userService.create(createUserDto);
  }

  @Post('avatar-upload')
  @ApiImageFile('image', ['userId'], { userId: { type: 'string' }})
  public async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() request: Request,
  ): Promise<string> {
    return await this.userService.uploadAvatar(request.body['userId'], file);
  }
}
