import { writable } from 'svelte/store';
import fs from "fs";
import path from "path"

export const stats = writable([]);
export const latest = writable("");

// const DB_DIR = 'K:/Minecraft/HardcoreHIH2023/Development/hardercore-api/db/worlds';
const DB_DIR = './sample/db/worlds';

export async function refresh_store() {
    console.log("Refreshing stats store...");

    let world_directories = fs.readdirSync(DB_DIR);
    world_directories.sort((a, b) => parseInt(a.split('world')[1]) - parseInt(b.split('world')[1]));

    stats.subscribe(items => {
        let current = "";

        world_directories.forEach(function (directory, _index) {
            // fuck you macos
            if (directory === ".DS_Store") {
                return;
            }

            current = directory
                
            // @ts-ignore
            // items[directory]
            let players = []
            let entry = {}
            let stat_files = fs.readdirSync(DB_DIR + "/" + directory)
            stat_files.forEach(async function (file, index) {
                    let uuid = file.split(".json")[0]
                    if (uuid != "killed") {
                        let stat = fs.readFileSync(DB_DIR + "/" + directory + "/" + file, { encoding: 'utf8', flag: 'r'});
                        stat = JSON.parse(stat);
                        // entry[uuid] = stat;
                        players.push(stat);
                    }
            });

            items.push(players)
        });

        latest.update(val => current)
    });

    // start timer to refresh store on timeout
    start_store_timer()
}

// starts a setTimeout that calls refresh_store()
export function start_store_timer() {
    setTimeout(refresh_store, 200000);
}
