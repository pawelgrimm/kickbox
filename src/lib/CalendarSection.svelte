<script>
    import TimeBlock from "$lib/TimeBlock.svelte";

    const BLOCKS = 8
    const calendar = []

    const hourLabels = new Array(BLOCKS + 1);

    for (let i = 0; i < hourLabels.length; i++)  {
        hourLabels[i] = {
            content: (9 + i).toString().padStart(2, "0").padEnd(4, "0")
        }
    }

    calendar[0] = {
        title: "mon",
        key: "m"
    }
    calendar[1] = {
        title: "tues",
        key: "t"
    }
    calendar[2] = {
        title: "wed",
        key: "w"
    }
    calendar[3] = {
        title: "thurs",
        key: "r"
    }
    calendar[4] = {
        title: "fri",
        key: "f"
    }
</script>

<section class="calendarSection">

    <div class="calendar">
        <div class="hours"></div>
        {#each hourLabels as hourLabel, index}
            <div class="hourLabel" style="grid-area: h{index}"><p>{hourLabel.content}</p></div>
        {/each}
        {#each calendar as day, index}
            <div class="day" style="grid-column: {index + 2}; grid-row: 1 / 10;">
            </div>
            <div class="title grid-item" style="grid-area: {day.key}h">{day.title}</div>
            {#each [1, 2, 3, 4, 5, 6, 7, 8] as timeBlock}
                <TimeBlock dayKey={day.key} hour={timeBlock} />
            {/each}
        {/each}
    </div>

</section>

<style>
    .calendarSection {
        width: calc((8 * var(--column-width)) + (5 * var(--gutter)));
        background: var(--background-color-80);
        box-shadow: var(--shadow-elevation-medium);
        border-radius: var(--gap);
        overflow: clip;
        padding: var(--gutter);
        padding-bottom: calc(2 * var(--gutter));
    }

    .calendar {
        display: grid;
        grid-template-columns: 50px repeat(5, minmax(0, 1fr));
        grid-template-rows: repeat(9, minmax(0, 1fr));
        height: 100%;
        column-gap: var(--gap);
        grid-template-areas:
            "h0 mh th wh rh fh"
            "h1 m1 t1 w1 r1 f1"
            "h2 m2 t2 w2 r2 f2"
            "h3 m3 t3 w3 r3 f3"
            "h4 m4 t4 w4 r4 f4"
            "h5 m5 t5 w5 r5 f5"
            "h6 m6 t6 w6 r6 f6"
            "h7 m7 t7 w7 r7 f7"
            "h8 m8 t8 w8 r8 f8";
    }

    .hours {
        /*background-color: rgba(255,0,0,.2);*/
        grid-column: 1;
        grid-row: 1 / 10;
    }

    .day {
        /*background-color: rgba(255,0,0,.2);*/
        grid-column: attr(data-count integer, 1);
        grid-row: 1 / 10;
        border-radius: var(--gap);
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: var(--gutter);
    }

    .title {
        font-size: 24px;
        margin: 0;
        line-height: 0;
        /*padding-bottom: 20px;*/
    }

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

    .hourLabel {
        position: relative;
        place-self: end center;
        height: 100%;
        width: 100%;
        text-align: center;
    }

    .hourLabel p {
        margin: 0;
        position: absolute;
        bottom: 0;
        transform: translateY(50%);
    }

</style>