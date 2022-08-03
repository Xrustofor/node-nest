export class ProductModel {
	_id: string;
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credite: number;
	calculateRating: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	catigories: [];
	tags: string;
	characteristics: {
		[key: string]: string;
	};
}
