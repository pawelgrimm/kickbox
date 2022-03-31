<script>
    export let dayKey;
    export let hour;
</script>

<div class="timeBlock grid-item timeBlock--{hour}" style="grid-area: {dayKey}{hour}"></div>

<style>
    .timeBlock {
        text-align: center;
        width: 100%;
        height: 100%;
        background: rgb(0,255,0,0.2);
        border-top: 1px solid var(--primary-color);
    }

    .timeBlock--8 {
        border-bottom: 1px solid var(--primary-color);
    }

    .grid-item {
        place-self: center;
    }
</style>