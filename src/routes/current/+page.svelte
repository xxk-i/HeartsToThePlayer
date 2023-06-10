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
            <p>{JSON.stringify(result.worlds[selected])}</p>
            <table>
                <caption>Player Stats</caption>
                <body>
                    {#each result.worlds[selected] as player}
                        {#each Object.keys(player) as stat}
                            <tr>
                                <td>{stats_en[stat]}</td>
                                <td>{player[stat]}</td>
                            </tr>
                        {/each}
                    {/each}
                </body>
            </table>
        {/await}


    </div>
</body>


