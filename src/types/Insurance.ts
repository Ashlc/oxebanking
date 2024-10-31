export type InsuranceModality = 'card' | 'travel' | 'life' | 'home' | 'auto' | 'previdency';

export interface InsuranceType {
	title: string;
	icon: string;
	description: string[];
	price: number;
	contracted: boolean;
	contractDate?: string;
	type: InsuranceModality;
}

interface Plans {
	title: string;
	description: string[];
	price: number;
}

export type InsuranceRecords = Record<InsuranceModality, Plans[]>;
