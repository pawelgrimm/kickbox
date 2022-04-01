<script>
    import {dndzone} from "svelte-dnd-action";
    import TaskCard from "$lib/TaskCard.svelte";
    import {tasks} from "$lib/tasksStore.js";
    import {onMount} from "svelte";

    let items = [];
    $: items = $tasks;

    onMount(() => {
        const apiKey = window.prompt("Enter a Todoist API key");
        tasks.fetch(apiKey);
    })

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
    {#if items != null && items?.length > 0}
    {#each items as item(item.id)}
        <TaskCard {...item}/>
    {/each}
    {/if}
</section>

<style>
    .taskSection {
        overflow-y: auto;
        overflow-x: hidden;
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