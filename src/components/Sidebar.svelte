<script>
    /**
	 * @type {string}
	 */
     export let side;
</script>

<nav class={side}>
    <slot name="content"></slot>
</nav>

<style>
    .container {
        margin-top: 1rem;
    }

    nav :global(a) {
        color: lightgray;
    }
    
    nav :global(a:hover) {
        color: white;
    }

    nav :global(li) {
        list-style: none;
        line-height: 1.5rem;
    }

    .left {
        border-left: 1px solid darkgray;
    }

    .right {
        border-right: 1px solid darkgray;
    }
</style>