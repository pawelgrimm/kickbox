<script>
    import TaskSection from "$lib/TaskSection.svelte";
    import CalendarSection from "$lib/CalendarSection.svelte";
</script>

<div class="app">
   <TaskSection />
   <CalendarSection />
</div>

<style>
   .app {
      position: absolute;
      left: var(--app-left);
      top: var(--app-top);
      display: flex;
      flex-direction: row;
      height: calc(100vh - var(--app-top) - var(--margin));
      gap: var(--gutter);
   }
</style>