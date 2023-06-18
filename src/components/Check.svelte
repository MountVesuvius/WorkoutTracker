<script>
	export let active = false;
</script>

<style lang="postcss">
	.button { padding: 0.5rem; }
    .active {background-color: theme(colors.green.300);}
    .inactive {background-color: theme(colors.slate.200); background-opacity: 0.2;}
</style>

<button
    class="w-8 rounded-md bg-opacity-20"
	class:active={active===true}
    class:inactive={active===false}
>
    ?
</button>