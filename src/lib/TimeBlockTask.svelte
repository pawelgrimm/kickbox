<script>
    let durationText = ""
    export let title;
    export let description;
    export let duration = 1;
    export let incrementDuration = () => {}
    export let decrementDuration = () => {}
    export let canIncrement = false;
    export let canDecrement = false;
    $: durationText = `${duration}h`;

    function getDurationText() {
        // const hours = Math.floor(duration / 2);
        // const mins = duration % 2 * 30;

        // const hoursPart = hours > 0 ? `${hours}h` : "";
        // const minsPart = mins > 0 ? `${hours}m` : "";

        // return `${duration}h`
    }
</script>

<div class="task">
    <h3 class="task__title">{title}</h3>
    <div class="task__footer">
        <p class="task__duration">{durationText}</p>
<!--        <div class="task__buttons">-->
<!--            <div class="task__button" class:active="{canIncrement}" on:click="{incrementDuration}">+</div>-->
<!--            <div class="task__button" class:active="{canDecrement}" on:click="{decrementDuration}">-</div>-->
<!--        </div>-->
    </div>
</div>

<style>
    .task {
        background: var(--secondary-color);
        padding: var(--gap);
        border-radius: var(--gap);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: var(--gap);
        flex-shrink: 1;
        text-align: left;
        width: 100%;
    }

    .task__title {
        font-size: 16px;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .task__duration {
        margin: 0;
    }

    .task__footer {
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .task__buttons {
        font-size: 16px;
        display: flex;
        flex-direction: row;
        gap: var(--gap);
    }

    .task__button.active:hover {
        cursor: pointer;
    }

    .task__button:hover {
        cursor: not-allowed;
    }
</style>
