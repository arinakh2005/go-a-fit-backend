import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { FitProduct } from '../entities/fit-product.entity';
import { GoogleDriveService } from 'nestjs-googledrive-upload';

@Injectable()
export class FitProductService extends BaseService {
  constructor(
    protected readonly unitOfWork: UnitOfWorkService,
    private readonly googleDriveService: GoogleDriveService,
  ) {
    super(unitOfWork);
  }

  public async findAll(): Promise<FitProduct[]> {
    return await this.unitOfWork.fitProductRepository.find();
  }

  public async uploadImage(productId: string, file: Express.Multer.File): Promise<string> {
    const work = async () => {
      const fitProduct = await this.unitOfWork.fitProductRepository.findById(productId);

      file.originalname = `product-${productId}`;
      file.filename = `product-${productId}`;
      fitProduct.imageUrl = await this.googleDriveService.uploadImage(file);
      await this.unitOfWork.fitProductRepository.save(fitProduct);

      return fitProduct.imageUrl;
    }

    return await this.unitOfWork.doWork(work);
  }
}