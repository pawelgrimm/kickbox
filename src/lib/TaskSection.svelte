<script>
    import {dndzone} from "svelte-dnd-action";
    import TaskCard from "$lib/TaskCard.svelte";

    let items = [
        {
            id: "task1",
            title: "tumeric tattooed bicycle",
        },
        {
            id: "task2",
            title: "hexagon quinoa waistcoat",
            description: "iceland fashion axe williamsburg shaman brunch four dollar toast. Chia sriracha whateve"
        },
        {
            id: "task3",
            title: "hot chicken chillwave gochujang"
        }
    ]

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