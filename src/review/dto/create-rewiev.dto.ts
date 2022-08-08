import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
	@IsString()
	name: string;
	
	@IsString()
	title: string;

	@IsString()
	description: string;

	@Max(5)
	@Min(1, { message: 'Рейтинг не может бути менше одного'})
	@IsNumber()
	rating: number;

	@IsString()
	productId: string;
}