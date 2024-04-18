<script>
	import Sidebar from "../../components/Sidebar.svelte";

</script>

<div class='inner-nav'>
    <h1 style="text-wrap: nowrap;">In this page</h1>
    <Sidebar side="right">
        <ul slot="content">
            <li>
                <a href="#root">/</a>
            </li>
            <li>
                <a href="#all-stats">/world/stats</a>
            </li>
            <li>
                <a href="#all-stats">/world/stats/{`<uuid>`}</a>
            </li>
        </ul>
    </Sidebar>
</div>

<ul class='main-list'>
    <li class="api-item">
        <h1 id="root">GET /</h1>
        <h4 style="color: slategray;"><i>Shows the API greeting message</i></h4>
        <div class="code-container">
            <code>
                "You have reached the homepage of hardcore-api"
            </code>
        </div>
    </li>
    <li class="api-item">
        <h1 id="all-stats">GET /world/stats</h1>
        <h4 style="color: slategray;"><i>Returns all stats of the current world</i></h4>
        <div class="code-container">
            <pre>{`[
    {
        "displayName": "xxk_",
        "skinUrl": "http://textures.minecraft.net/texture/1bfd5380b6269ae4ebda0a23ba6e0657d1288cfbeba385f62fa78d70b857caef",
        "timeInWater": 151337,
        "timeInNether": 229708,
        "damageTaken": 43,
        "mobsKilled": 0,
        "foodEaten": 7,
        "experienceGained": 0
    }
    {
        "displayName": "SylverSyler",
        "skinUrl": "http://textures.minecraft.net/texture/c4139bd3e9a284f4183f5a684bbc29829060c71e2b638112973d8ef742b3577d",
        "timeInWater": 2390,
        "timeInNether": 0,
        "damageTaken": 33,
        "mobsKilled": 590,
        "foodEaten": 1120,
        "experienceGained": 1313
    }
]`}</pre>
        </div>
    </li>
    <li class="api-item">
        <h1 id="root">GET /world/stats/{`<uuid>`}</h1>
        <h4 style="color: slategray;"><i>Get stats for a current player by Mojang UUID</i></h4>
        <div class="code-container">
<pre>{`{
    "displayName": "xxk_",
    "skinUrl": "http://textures.minecraft.net/texture/1bfd5380b6269ae4ebda0a23ba6e0657d1288cfbeba385f62fa78d70b857caef",
    "timeInWater": 151337,
    "timeInNether": 229708,
    "damageTaken": 43,
    "mobsKilled": 0,
    "foodEaten": 7,
    "experienceGained": 0
}`}</pre>
        </div>
    </li>
</ul>

<style>
    .main-list {
        grid-area: content;
        list-style: none;
    }

    .inner-nav {
        grid-area: inner-nav;
        padding-right: 1rem;
        position: sticky;
        top: 0;
        align-self: start;
    }

    .code-container {
        border: 1px;
        border-radius: 5px;
        background-color: gray;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
    }

    .api-item {
        padding-bottom: 4rem;
    }
</style>