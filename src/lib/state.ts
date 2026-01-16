import { persistedState } from 'svelte-persisted-state';

export const selectedYear = persistedState<number | 'all'>('selectedYear', 'all');
