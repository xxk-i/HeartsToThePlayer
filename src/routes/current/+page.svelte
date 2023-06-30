<script>
    import '../../global.css'
	import { stats_en } from '../../stats_en.js';

    // +page.server.js
    export let data;

    // TODO
    let world_nums = [...Array(11).keys()].slice(1)
    let selected = 1;
</script>

<body>
    <h1>Current World Stats</h1>

    <div>
        World:
        <select bind:value={selected}>
            {#each world_nums as num}
                <option value={num}>
                    {num}
                </option>
            {/each}
        </select>

        {#await data}
            <p> Fetching stats </p>
        {:then result}
            <p>{JSON.stringify(result.worlds[selected - 1])}</p>
            <table>
                <caption>Player Stats</caption>
                <body>
                    <!-- generate table headers -->
                    {#each Object.keys(stats_en) as key}
                        <th>{stats_en[key]}</th>
                    {/each}
                    <!-- for each world -->
                    {#each result.worlds[selected - 1] as player}
                        <!-- for each player  -->
                        <tr>
                            {#each Object.keys(player) as stat}
                                {#if stat === "skinUrl"}
                                        <td><img src={player[stat]} alt={player["displayName"]}></td>
                                {:else}
                                        <td>{player[stat]}</td>
                                {/if}
                            {/each}
                        </tr>
                    {/each}
                </body>
            </table>
        {/await}


    </div>
</body>


