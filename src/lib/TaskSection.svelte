<script>
   import TaskCard from "$lib/TaskCard.svelte";

   const tasks = [
       {
           title: "tumeric tattooed bicycle",
       },
       {
           title: "hexagon quinoa waistcoat",
           description: "iceland fashion axe williamsburg shaman brunch four dollar toast. Chia sriracha whateve"
       },
       {
           title: "hot chicken chillwave gochujang"
       }
   ]

</script>

<section class="taskSection">
    {#each tasks as task}
        <TaskCard {...task}/>
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