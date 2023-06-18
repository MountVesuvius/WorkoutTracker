<script>
    // import { fade } from 'svelte/transition';

    export let setNumber = 1;
    export let weight = 100;
    export let reps = 10;

    export let achievedWeight = 0;
    export let achievedReps = 0;

</script>

<div class="flex flex-row items-center justify-between py-2 text-center">
    <button class="bg-slate-200 w-8 rounded-md bg-opacity-20">{setNumber}</button>
    <span class="w-1/6">{weight} x {reps}</span>
    <input class="rounded-md w-1/5 text-black px-2 [appearance:textfield]" type="number" bind:value={achievedWeight}>
    <input class="rounded-md w-1/5 text-black px-2 [appearance:textfield]" type="number" bind:value={achievedReps}>
    <button class="bg-slate-200 rounded-md bg-opacity-20 w-8">?</button>
</div>