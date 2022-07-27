import { Module } from '@nestjs/common';

@Module({})
export class ProductModule {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculatedRating: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	catigories: string[];
	tags: string;
	characteristics: {
		[key: string]: string;
	};
}
