import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { reviewDTO } from './dto/review.dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}
  @Post(':id/review')
  async createReview(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: reviewDTO,
  ) {
    return this.reviewsService.saveReview(id, body);
  }
}
