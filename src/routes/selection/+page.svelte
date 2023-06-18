<script>
    import Option from "../../components/Option.svelte";

    import { exercises } from "../../stores/exercise";

    let options = [
        {id: 1, name: "Bench Press", category: "Chest"},
        {id: 2, name: "Back Squat", category: "Legs"},
        {id: 3, name: "Deadlift", category: "Back"},
        {id: 4, name: "Overhead Press", category: "Shoulders"},
        {id: 5, name: "Barbell Row", category: "Back"},
    ]

    function addExercise(name){
        let l = $exercises.length;
        if (l == 0) {
            $exercises = [{id: l, name: name, sets: []}];
        } else {
            $exercises = [...$exercises, {id: l, name: name, sets: []}];
        }
        console.log($exercises);
    }
</script>

<a href="/routine">
    <button class="h-10">Return</button>
</a>

<div class="h-screen overflow-y-hidden scroll-auto">
    {#each options as item}
        <a href="/routine" on:click={() => { addExercise(item.name); }}>
            <svelte:component this={Option} exerciseName={item.name} exerciseCategory={item.category}/>
        </a>
    {/each}
</div>