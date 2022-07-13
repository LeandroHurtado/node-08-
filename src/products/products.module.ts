import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Review } from '../reviews/entities/review.entity';
import { ReviewsService } from '../reviews/reviews.service';
import { ReviewsController } from '../reviews/reviews.controller';
import { Size } from 'src/size/entities/size.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Review, Size])],
  controllers: [ProductsController, ReviewsController],
  providers: [ProductsService, ReviewsService],
  exports: [TypeOrmModule],
})
export class ProductsModule {}
