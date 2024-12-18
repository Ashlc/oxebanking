import type { ConsortiumType } from '../../../types/Consortium';
import type { InsuranceRecords, InsuranceType } from '../../../types/Insurance';

export const insuranceMock: InsuranceRecords = {
	card: [
		{
			title: 'Seguro Cartão Básico',
			description: ['Cobertura contra fraudes', 'Proteção de compras', 'Assistência emergencial'],
			price: 15
		},
		{
			title: 'Seguro Cartão Premium',
			description: [
				'Cobertura contra fraudes',
				'Proteção de compras e viagens',
				'Serviço de concierge 24h'
			],
			price: 30
		}
	],
	travel: [
		{
			title: 'Seguro Viagem Nacional',
			description: ['Cobertura médica', 'Assistência de bagagem', 'Cancelamento de viagem'],
			price: 50
		},
		{
			title: 'Seguro Viagem Internacional',
			description: [
				'Cobertura médica e odontológica',
				'Assistência de bagagem e documentos',
				'Cobertura para esportes radicais'
			],
			price: 120
		}
	],
	life: [
		{
			title: 'Seguro de Vida Básico',
			description: [
				'Cobertura por invalidez',
				'Indenização por falecimento',
				'Assistência funeral'
			],
			price: 80
		},
		{
			title: 'Seguro de Vida Familiar',
			description: [
				'Cobertura para cônjuge',
				'Cobertura para filhos',
				'Serviço de suporte psicológico'
			],
			price: 150
		}
	],
	home: [
		{
			title: 'Seguro Residencial Básico',
			description: [
				'Cobertura contra incêndios',
				'Cobertura contra roubos',
				'Assistência de manutenção'
			],
			price: 100
		},
		{
			title: 'Seguro Residencial Completo',
			description: [
				'Cobertura contra desastres naturais',
				'Cobertura contra roubo e vandalismo',
				'Assistência elétrica e hidráulica'
			],
			price: 200
		}
	],
	auto: [
		{
			title: 'Seguro Automotivo Básico',
			description: [
				'Cobertura contra roubo e furto',
				'Assistência 24h',
				'Cobertura contra danos a terceiros'
			],
			price: 300
		},
		{
			title: 'Seguro Automotivo Completo',
			description: [
				'Cobertura total contra acidentes',
				'Carro reserva',
				'Cobertura para passageiros'
			],
			price: 500
		}
	],
	previdency: [
		{
			title: 'Previdência Privada',
			description: ['Aposentadoria garantida', 'Reserva para sonhos', 'Assistência funerária'],
			price: 100
		}
	]
};

export const myInsurances: InsuranceType[] = [
	{
		title: insuranceMock.life[0].title,
		icon: 'mdi:cards-heart-outline',
		description: insuranceMock.life[0].description,
		price: insuranceMock.life[0].price,
		contracted: true,
		contractDate: '2021-01-01',
		type: 'life'
	},
	{
		title: insuranceMock.auto[0].title,
		icon: 'mdi:car-outline',
		description: insuranceMock.auto[0].description,
		price: insuranceMock.auto[0].price,
		contracted: true,
		contractDate: '2021-01-01',
		type: 'auto'
	},
	{
		title: insuranceMock.travel[0].title,
		icon: 'mdi:airplane-takeoff',
		description: insuranceMock.travel[0].description,
		price: insuranceMock.travel[0].price,
		contracted: true,
		contractDate: '2021-01-01',
		type: 'travel'
	},
	{
		title: insuranceMock.home[0].title,
		icon: 'mdi:shield-home-outline',
		description: insuranceMock.home[0].description,
		price: insuranceMock.home[0].price,
		contracted: true,
		contractDate: '2021-01-01',
		type: 'home'
	}
];

export const insurances: InsuranceType[] = [
	{
		title: 'Seguro de Vida',
		icon: 'mdi:cards-heart-outline',
		description: ['Garanta o futuro de quem você ama hoje!'],
		price: insuranceMock.life[0].price,
		contracted: false,
		type: 'life'
	},
	{
		title: 'Seguro Automotivo',
		icon: 'mdi:car-outline',
		description: ['Proteja seu carro e não seja surpreendido por um acidente!'],
		price: insuranceMock.auto[0].price,
		contracted: false,
		type: 'auto'
	},
	{
		title: 'Seguro Viagem',
		icon: 'mdi:airplane-takeoff',
		description: ['Conte com mais tranquilidade em viagens nacionais e internacionais.'],
		price: insuranceMock.travel[0].price,
		contracted: false,
		type: 'travel'
	},
	{
		title: 'Seguro Residencial',
		icon: 'mdi:shield-home-outline',
		description: ['Proteja sua casa e todos os seus bens contra riscos naturais e humanos.'],
		price: insuranceMock.home[0].price,
		contracted: false,
		type: 'home'
	},
	{
		title: 'Seguro Cartão',
		icon: 'mdi:credit-card-outline',
		description: ['Proteja seu cartão de crédito e não seja surpreendido por fraudes.'],
		price: insuranceMock.card[0].price,
		contracted: false,
		type: 'card'
	},
	{
		title: 'Previdência Privada',
		icon: 'mdi:piggy-bank-outline',
		description: ['Reserve para o seu futuro com segurança.'],
		price: insuranceMock.previdency[0].price,
		contracted: false,
		type: 'previdency'
	}
];

export type ConsortiumType = {
	image: string;
	title: string;
	description: string[];
	price: number;
	installments?: number;
	contracted?: boolean;
	contractDate?: string;
};

export const consortiumsMock: ConsortiumType[] = [
	{
		image:
			'https://static.wixstatic.com/media/c87e0f_25b4e52bb309448aa56c8a59702c9d9d~mv2.jpg/v1/fill/w_568,h_244,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c87e0f_25b4e52bb309448aa56c8a59702c9d9d~mv2.jpg',
		title: 'Consórcio Automotivo',
		description: [
			'Compra de veículos novos e usados',
			'Taxa de administração reduzida',
			'Sem juros'
		],
		price: 20000,
		installments: 60
	},
	{
		image: 'https://www.proiectari.md/wp-content/uploads/2023/12/model-casa.jpg',
		title: 'Consórcio Imobiliário',
		description: [
			'Compra de imóveis residenciais ou comerciais',
			'Possibilidade de lances para antecipação',
			'Sem necessidade de entrada'
		],
		price: 150000,
		installments: 180,
		contractDate: '2023-04-15'
	},
	{
		image:
			'https://superbikefactory.co.uk/media/wysiwyg/httpssuperbikefactory.co.ukused-motorcyclesmake_8850_model_9370_4__5.jpg',
		title: 'Consórcio de Motos',
		description: [
			'Aquisição de motos de qualquer cilindrada',
			'Taxa de administração competitiva',
			'Cobertura nacional'
		],
		price: 10000,
		installments: 36
	},
	{
		image:
			'https://triider-prd-blog-files.s3.sa-east-1.amazonaws.com/wp-content/uploads/2018/03/28225119/prestacao-de-servico-onde-encontrar-bons-profissionais.jpg',
		title: 'Consórcio de Serviços',
		description: [
			'Planejamento de viagens e eventos',
			'Reformas e serviços de saúde',
			'Sem cobrança de juros'
		],
		price: 5000,
		installments: 24
	},
	{
		image: 'https://marcaspelomundo.com.br/wp-content/uploads/2021/11/eletronicos.jpg',
		title: 'Consórcio de Eletrônicos',
		description: [
			'Aquisição de eletrônicos e eletrodomésticos',
			'Parcelamento sem juros',
			'Entrega garantida após contemplação'
		],
		price: 3000,
		installments: 18
	}
];

export const myConsortiums: ConsortiumType[] = [
	{
		image:
			'https://static.wixstatic.com/media/c87e0f_25b4e52bb309448aa56c8a59702c9d9d~mv2.jpg/v1/fill/w_568,h_244,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c87e0f_25b4e52bb309448aa56c8a59702c9d9d~mv2.jpg',
		title: 'Consórcio Automotivo',
		price: 12547.16,
		installments: 80,
		contracted: true,
		contractDate: '2021-01-01',
		description: [
			'Compra de veículos novos e usados',
			'Taxa de administração reduzida',
			'Sem juros'
		]
	},
	{
		image: 'https://www.proiectari.md/wp-content/uploads/2023/12/model-casa.jpg',
		title: 'Consórcio Imobiliário',
		price: 12547.16,
		installments: 80,
		contracted: true,
		contractDate: '2021-01-01',
		description: [
			'Compra de imóveis residenciais ou comerciais',
			'Possibilidade de lances para antecipação',
			'Sem necessidade de entrada'
		]
	}
];
