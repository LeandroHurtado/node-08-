import { IsString } from 'class-validator';

export class reviewDTO {
  @IsString()
  description: string;
}
