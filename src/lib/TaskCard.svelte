<script>
    export let title;
    export let description;
</script>

<div class="task">
    <h3 class="task__title">{title}</h3>
    {#if description}
        <h4 class="task__description">{description}</h4>
    {/if}
</div>

<style>
    .task {
        background: var(--secondary-color);
        padding: var(--gutter);
        border-radius: var(--gap);
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: var(--gap);
    }

    .task__title {
        font-size: 24px;
        margin: 0;
    }

    .task__description {
        color: var(--primary-color-muted);
        margin: 0;
        font-size: 18px;
    }

</style>