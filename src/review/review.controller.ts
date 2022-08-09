import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { JwtAuthGurd } from 'src/auth/guards/jwt.guard';
import { UserEmail } from 'src/decorators/user-email.decorator';
import { CreateReviewDto } from './dto/create-rewiev.dto';
import { REVIEW_NOT_FOUND } from './review.constans';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService){}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto){
		return this.reviewService.create(dto);
	}

	@UseGuards(JwtAuthGurd)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deleteDoc = await this.reviewService.delete(id);
		if(!deleteDoc){
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}
	
	@UseGuards(JwtAuthGurd)
	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string,  @UserEmail() email: string ){
		return this.reviewService.findByProductId(productId);
	}
	
}
