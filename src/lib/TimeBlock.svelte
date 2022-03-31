<script>
    import {dndzone} from "svelte-dnd-action";
    import TimeBlockTask from "$lib/TimeBlockTask.svelte";

    const MAX_DURATION = 8;
    export let dayKey = "x";
    export let hour = 0;
    export let items = [];
    export let duration = 1;
    let gridArea = "";
    let gridRowEnd = "";
    $: gridArea = `${dayKey}${hour}`
    $: gridRowEnd = hour + duration + 1

    function handleDndConsider(e) {
        items = e.detail.items;
    }

    function handleDndFinalize(e) {
        items = e.detail.items;
    }


    let canIncrement = false;
    let canDecrement = false;
    $: canIncrement = duration < MAX_DURATION;
    $: canDecrement = duration > 1;

    function incrementDuration () {
        console.log("increment clicked")
        if (canIncrement){
            duration += 1;
        }
        console.log(duration);
    }

    function decrementDuration () {
        if (canDecrement) {
            duration -= 1;
        }
    }
</script>

<div use:dndzone={{items,dropTargetStyle: ""}}
     on:consider="{handleDndConsider}"
     on:finalize="{handleDndFinalize}"
     class="timeBlock grid-item timeBlock--{hour}"
     style="grid-area: {gridArea}; grid-row-end: {gridRowEnd};"
>
    {#each items as item(item.id)}
        {#key duration}
        <TimeBlockTask {...item}
                       duration={duration}
                       canDecrement={canDecrement}
                       canIncrement={canIncrement}
                       incrementDuration={incrementDuration}
                       decrementDuration={decrementDuration}
                       />
        {/key}
    {/each}
</div>

<style>
    .timeBlock {
        text-align: center;
        width: 100%;
        height: 100%;
        border-top: 1px solid var(--primary-color);
        display: flex;
        flex-direction: row;
    }

    .timeBlock--8 {
        border-bottom: 1px solid var(--primary-color);
    }

    .grid-item {
        place-self: center;
    }
</style>