import { Controller, Get, Post, Req, UploadedFile, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FitProductService } from '../services/fit-product.service';
import { AuthGuard } from '../auth/auth.guard';
import { FitProduct } from '../entities/fit-product.entity';
import { ApiImageFile } from '../decorators/api-file.decorator';
import { Request } from 'express';

@ApiTags('fit-products')
@Controller('api/fit-products')
@UseGuards(AuthGuard)
export class FitProductsController {
  constructor(private readonly fitProductService: FitProductService) { }

  @Get()
  public async findAll(): Promise<FitProduct[]> {
    return await this.fitProductService.findAll();
  }

  @Post('image-upload')
  @ApiImageFile('image', ['productId'], { productId: { type: 'string' }})
  public async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() request: Request,
  ): Promise<string> {
    return await this.fitProductService.uploadImage(request.body['productId'], file);
  }
}
