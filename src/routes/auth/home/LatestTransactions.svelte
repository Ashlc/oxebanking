<script lang="ts">
  import Icon from '@iconify/svelte';

  interface Transaction {
    id: number;
    date: string;
    type: string;
    value: string;
    operation: 'in' | 'out' | 'card';
    agent: string;
  }
  
  const latestTransactions: Transaction[] = [
    {
      id: 1,
      date: '2021-09-01',
      type: "pix",
      value: "R$ 150,00",
      operation: "out",
      agent: "João da Silva"
    },
    {
      id: 2,
      date: '2021-09-02',
      type: "card",
      value: "R$ 120,00",
      operation: "card",
      agent: "Unicompras"
    },
    {
      id: 3,
      date: '2021-09-03',
      type: "pix",
      value: "R$ 50,00",
      operation: "in",
      agent: "João da Silva"
    },
    {
      id: 4,
      date: '2021-09-04',
      type: "card",
      value: "R$ 200,00",
      operation: "card",
      agent: "OBoticário"
    }
  ];

  // Define an object to hold styles and values based on operation
  const styles = {
    in: {
      bgColor: 'bg-secondary-100',
      textColor: 'text-secondary-500',
      word: 'de',
      sign: '+'
    },
    out: {
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      word: 'para',
      sign: '-'
    },
    card: {
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-500',
      word: 'em',
      sign: ''
    }
  };
</script>

<div>
  <div class="flex flex-col rounded-lg gap-4 border px-4 pb-4">
  <div class="flex flex-row justify-between pt-4 pb-2">
    <div class="flex flex-row items-center gap-2">
        <Icon icon="material-symbols:receipt-long-outline" class="text-primary-200" height="18" />
      <p class="text-primary-200 text-sm">Ùltimas transações</p>
    </div>
    <button class="flex flex-row gap-2 items-center text-sm text-secondary-400 hover:underline">Ver extrato completo <span><Icon icon="ic:chevron-right" height="16" /></span></button>
  </div>
  <div class="flex flex-col gap-6">
    {#each latestTransactions as t}
      <div class="flex flex-row items-center gap-3">
        <div class={`${styles[t.operation].bgColor} ${styles[t.operation].textColor} p-2 aspect-square rounded-lg`}>
          <Icon icon={t.type === 'pix' ? 'ic:baseline-pix' : 'material-symbols:credit-card'} height="24" />
        </div>
        <div>
          <div class="flex flex-row gap-1">
            <p class={`text-primary-500 text-sm font-bold ${styles[t.operation].textColor}`}>{`${styles[t.operation].sign}${t.value}`}</p>
            <p class="text-primary-200 text-sm">{styles[t.operation].word}</p>
            <p class="text-primary-500 text-sm">{t.agent}</p>
          </div>
          <p class="text-primary-200 text-sm">{t.date}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
</div>
