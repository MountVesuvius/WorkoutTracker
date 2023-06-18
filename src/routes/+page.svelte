<script>
    import { exercises } from "../stores/exercise";
    import data from '../routine.json';

    /**
     * @param {any[] | null} data
     */
    function loadRoutine(data){
        if (data == null) {
            $exercises = [];
        } else {
            $exercises = data;
        }
    }
   
</script>

<div class="flex flex-col">
    <span>Home page</span>
    <a href="/routine">
        <button>Functionality Test</button>
    </a>

    <a href="/routine" on:click={() => {loadRoutine(data)}}>
        <button>Load Routine</button>
    </a>
</div>