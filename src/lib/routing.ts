import { writable } from 'svelte/store';

type Routes = 'home' | 'game';

const route = writable<Routes>('home');

export { route }