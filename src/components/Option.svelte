<script>
    export let exerciseName = "Bench Press";
    export let exerciseCategory = "Chest";
</script>

<div class="flex border-2 border-white h-20 rounded-xl overflow-hidden m-2">
    <img class="scale-1/4" src="https://dummyimage.com/300x200/de6fde/ffffff" alt="exercise display">
    <div class="flex flex-col justify-center ml-3 text-left">
        <h2 class="text-xl">{exerciseName}</h2>
        <span class="text-gray-300 text-sm">{exerciseCategory}</span>
    </div>
</div>