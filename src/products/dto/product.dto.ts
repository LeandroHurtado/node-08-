import { IsArray, IsEnum, IsInt, IsString } from 'class-validator';

export class ProductDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  stock: number;

  @IsString({ each: true })
  @IsArray()
  @IsEnum(['XL', 'L', 'S'])
  sizes: string[];
}
