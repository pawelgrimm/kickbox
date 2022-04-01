<script>
    import {dndzone} from "svelte-dnd-action";
    import TaskCard from "$lib/TaskCard.svelte";
    import {tasks} from "$lib/tasksStore.js";

    let items = $tasks

    function handleDndConsider(e) {
        items = e.detail.items;
    }

    function handleDndFinalize(e) {
        items = e.detail.items;
    }
</script>

<section use:dndzone={{items, dropTargetStyle: ""}}
         on:consider="{handleDndConsider}"
         on:finalize="{handleDndFinalize}"
         class="taskSection"
>
    {#each items as item(item.id)}
        <TaskCard {...item}/>
    {/each}
</section>

<style>
    .taskSection {
        width: calc(3 * var(--column-width));
        background: var(--background-color-80);
        box-shadow: var(--shadow-elevation-medium);
        border-radius: var(--gutter);
        padding: var(--gutter);
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }
</style>