export type ConsortiumType = {
	image: string;
	title: string;
	description: string[];
	price: number;
	installments?: number;
	contracted?: boolean;
	contractDate?: string;
};
