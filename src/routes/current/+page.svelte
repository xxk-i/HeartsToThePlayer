<script>
    import '../../global.css'
    import './styles.css'
	import { stats_en } from '../../stats_en.js';

    // logo
    import logo from '$assets/HeartLogo.png';

    // +page.server.js
    export let data;

    // TODO
    let world_nums = [...Array(12).keys()].slice(1)
    let selected = 1;
</script>

<body>
    <title>World Stats</title>

    <div class="header">
        <div class="headerLeft">
            <img alt="Logo" src={logo}/>
        </div>

        <div class="headerCenter">
            <h1>
                <span style='color:green; justify-content:center'>STATUS: </span>
                <span style='color:white'>ALIVE</span>
                <span><br>World Uptime: 3 Days, 24 Minutes</span>
            </h1>
        </div>
    </div>

    <div class="main">
        <div class='sidebar'>
            <table>
                <tr>
                    <td><a href="google.com">World Stats</a></td>
                </tr>

                <tr>
                    <td><a href="hi">API</a></td>
                </tr>

                <tr>
                    <td><a href="hi">OBS Setup</a></td>
                </tr>
            </table>
        </div>
        <div class='stats'>

            {#await data}
                <p> Fetching stats </p>
            {:then result}
                <table>
                    <caption>
                        World:
                        <select bind:value={selected}>
                            {#each world_nums as num}
                                <option value={num}>
                                    {num}
                                </option>
                            {/each}
                        </select>
                    </caption>
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
    </div>
</body>

<footer>
    <h6>
        hardercoremc.net 2023
        <br>written in svelte &#139;3
    </h6>

</footer>