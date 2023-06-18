<script>
    import SetRow from "./SetRow.svelte";
    import { exercises, exerciseNum } from "../stores/exercise";

    export let exerciseName = "Bench";
    let exerciseId = $exerciseNum;
    $exerciseNum++;


    let sets = [
        { setNumber: 1, goalWeight: 20, goalReps: 10, weight: 0, reps: 0 },
        { setNumber: 2, goalWeight: 20, goalReps: 10, weight: 0, reps: 0 },
        { setNumber: 3, goalWeight: 20, goalReps: 10, weight: 0, reps: 0 },
        { setNumber: 4, goalWeight: 20, goalReps: 10, weight: 0, reps: 0 },
    ];

    $exercises.push({id: exerciseId, name: exerciseName, sets: sets});

    function addSet(){
		var l = sets.length;
        if (sets.length == 0) {
            sets[l] = {setNumber:l+1, goalWeight:0, goalReps:0, weight:0, reps:0};
        } else {
            sets[l] = {setNumber:l+1, goalWeight:sets[l-1].goalWeight, goalReps:sets[l-1].goalReps, weight:0, reps:0};
        }
        $exercises[exerciseId].sets = sets;
        console.log($exercises);
    }

    function removeSet(){
        sets = sets.slice(0, -1);
        $exercises[exerciseId].sets = sets;
        console.log($exercises);
    }

</script>

<div class="border-black border-1 rounded-md text-white px-4 my-4">
    <div class="flex flex-row justify-between">
        <h3>{exerciseName}</h3>
        <button on:click={() => {console.log($exercises)}}>Check Data</button>
    </div>

    <div class="text-white flex flex-row items-center justify-between py-2 text-center">
        <span class="w-8">Set</span>
        <span class="w-1/6">Goal</span>
        <span class="w-1/5">Weight</span>
        <span class="w-1/5">Reps</span>
        <button class="w-8">?</button>
    </div>
    {#each sets as set}
       <svelte:component this={SetRow} setNumber={set.setNumber} weight={set.goalWeight} reps={set.goalReps} bind:achievedWeight={set.weight} bind:achievedReps={set.reps}/>
    {/each}

    <div class="flex flex-row justify-around py-2 space-x-4">
        <button class="bg-emerald-500 bg-opacity-40 w-screen rounded-md" on:click={addSet}>Add Set</button>
        <button class="bg-red-500 bg-opacity-40 w-screen rounded-md" on:click={removeSet}>Remove Set</button>
    </div>
</div>