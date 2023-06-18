import { writable } from 'svelte/store';

export let exercises = writable([]);
export let exerciseNum = writable(0);

// export let array = writable([]);