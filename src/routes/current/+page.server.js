import { stats, latest } from '../../stats_store.server'

// fetch the requested info out of our server-side-only store
// and sends passes it up to +page.svelte
export async function load({ params }) {
    let worlds;
    latest.subscribe(latest_world => {
        stats.subscribe(obj => {
            worlds = obj;
        });
    });
    return {
       worlds 
    }
}