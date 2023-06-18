<script>
    import Exercise from "../../components/Exercise.svelte";

    import { exercises } from "../../stores/exercise";

    import { onMount } from "svelte";

    let data = '';

    async function fetchData() {
        const muscle = 'biceps';

        const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=expert`;

        const response = await fetch(url, {
            headers: {
            'X-Api-Key': "tWsMpF6xGXOdkAfyUiKm3g==FQbqSEiFQ4x95tZi",
            'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            data = result;
        } else {
            console.error('Error:', response.status);
        }
    }

    // onMount(fetchData);

    function addExercise() {
        let l = $exercises.length;
        if (l == 0) {
            $exercises = [{id: l, name: "Exercise "+l, sets: []}];
        } else {
            $exercises = [...$exercises, {id: l, name: "Exercise "+l, sets: []}];
        }
        console.log($exercises);
    }

    function finishWorkout() {
       console.log($exercises);
    };

</script>


<div class="flex flex-col">
    {#each $exercises as item}
        <svelte:component this={Exercise} exerciseName={item.name} sets={item.sets} bind:exerciseId={item.id}/>
    {/each}
</div>

<div class="flex flex-row justify-around mt-3 mb-10">
    <button class="text-white" on:click={addExercise}>Add Exercise</button>

    <button on:click={finishWorkout} class="text-white">Complete Workout</button>

    <a href="/selection">
        <button>Exercises</button>
    </a>
</div>

