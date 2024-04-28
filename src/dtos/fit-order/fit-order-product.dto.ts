import { IsUUID, Min } from 'class-validator';

export class FitOrderProductDto {
  @IsUUID()
  productId: string;

  @Min(1)
  quantity: number;
}