export interface Rentability {
	value: number;
	style: 'positive' | 'negative';
}

export type InvestmentType = 'cdb' | 'lcilca' | 'funds' | 'directTreasury';

export const rentabilityStyles = {
	positive: {
		color: 'text-secondary-400',
		icon: 'material-symbols:arrow-upward'
	},
	negative: {
		color: 'text-red-500',
		icon: 'material-symbols:arrow-downward'
	}
};

export const investmentTypes = {
	cdb: {
		icon: 'mdi:bank-outline',
		name: 'CDB',
		description:
			'Renda fixa emitida por bancos, com segurança e bom rendimento. Indicado para investidores conservadores.',
		options: [
			{
				title: 'CDB de Liquidez Diária',
				rentability: '102%',
				period: 'Liberação imediata'
			},
			{
				title: 'CDB de 6 meses',
				rentability: '110%',
				period: 'Liberação em 6 meses'
			},
			{
				title: 'CDB de 1 ano',
				rentability: '116%',
				period: 'Liberação em 1 ano'
			}
		]
	},
	lcilca: {
		icon: 'mdi:file-document-outline',
		name: 'LCI/LCA',
		description:
			'Renda fixa isenta de IR. Boa rentabilidade e baixo risco, atrelado ao setor imobiliário ou agrícola.',
		options: [
			{
				title: 'LCI/LCA de 9 meses',
				rentability: '92%',
				period: 'Liberação em 9 meses'
			},
			{
				title: 'LCI/LCA de 1 ano',
				rentability: '93%',
				period: 'Liberação em 1 ano'
			},
			{
				title: 'LCI/LCA de 2 anos',
				rentability: '95%',
				period: 'Liberação em 2 anos'
			}
		]
	},
	funds: {
		icon: 'mdi:chart-pie-outline',
		name: 'Fundos de investimento',
		description:
			'Investimentos diversificados em ações, títulos e derivativos. Pode variar de baixo a alto risco. Gerido por profissionais.',
		options: [
			{
				title: 'Fundo de segurança',
				rentability: '12,1%',
				period: 'Possibilidade de resgate no mesmo dia'
			},
			{
				title: 'Fundo balanceado',
				rentability: '11,05%',
				period: 'Resgate até 3 dias após a solicitação'
			},
			{
				title: 'Fundo potencial',
				rentability: '9,96%',
				period: 'Resgate até 3 dias após a solicitação'
			}
		]
	},
	directTreasury: {
		icon: 'mdi:treasure-chest-outline',
		name: 'Tesouro Direto',
		description: 'Renda fixa isenta de IR. Baixo risco e rendimento fixo.',
		options: [
			{
				title: 'Tesouro IPCA+ 2027',
				rentability: '102%',
				period: 'Liberação em 1 ano'
			}
		]
	}
};

export const activeButton = 'bg-secondary-300 text-white hover:bg-secondary-400';
