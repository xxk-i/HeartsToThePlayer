<script>
    import '../global.css'
    import logo from '$assets/logo.png';
    import Sidebar from "../components/Sidebar.svelte";
</script>

<title>Hardercore 2024</title>

<div class='wrapper'>
    <header class='header'>
        <img alt='Logo' src={logo}/>
    </header>
    <div class='sidebar'>
        <Sidebar side="left">
            <ul slot="content">
                <li><a href="/">Home</a></li>
                <li><a href="/obs">OBS Setup</a></li>
                <li><a href="/api">API Documentation</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </Sidebar>
    </div>
    <!-- Pages insert their content and inner navigation -->
    <slot></slot>
    <footer class='footer'>
        <h6>
            hardercoremc.net 2024
            <br>written in svelte &#139;3
        </h6>
    </footer>
</div>

<style>
    .wrapper {
        display: grid;
        height: 100vh;
        gap: 1rem;
        grid-template-rows: auto 10fr auto;
        grid-template-columns: 1fr 10fr 1fr;
        grid-template-areas:
        "header header header"
        "sidebar content inner-nav"
        "footer footer footer";
    }
    
    .header {
        text-align: center;
        grid-area: header;
        padding-top: 1rem;
    }

    .sidebar {
        padding-left: 1rem;
        text-wrap: nowrap;
        grid-area: sidebar;
        position: sticky;
        top: 0;
        align-self: start;
    }

    .content {
        grid-area: content;
        text-align: center;
        padding-bottom: auto;
    }

    .footer {
        text-align: center;
        grid-area: footer;
    }
</style>