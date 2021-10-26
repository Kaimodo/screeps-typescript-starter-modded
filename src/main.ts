import { ErrorMapper } from "tools/ErrorMapper";

import * as Profiler from "screeps-profiler";
import { USE_PROFILER } from "config";

import * as Inscribe from "screeps-inscribe";

import * as Logger from "tools/logger/logger";
import {ENABLE_DEBUG_MODE} from "config";

import * as Tools from "tools/tools"

import { ConsoleCommands } from "tools/consolecommands";

//New Script loaded
console.log(`[${Inscribe.color("New Script loaded", "red")}]`);

/*
// Log Info
if (Game.time % 25 === 0) {
  Logger.log.info(Inscribe.color(room.name + "| E: "+ Game.rooms[room.name].energyAvailable + "| Har: " + SpawnManager.harvesters.length + "| Bui: "+ SpawnManager.builders.length + "| Upg: " + SpawnManager.upgraders.length +"|", "skyblue"));
}
*/
if (USE_PROFILER) {
  Logger.log.info("Profiler an: "+ USE_PROFILER);
  Profiler.enable();
}



// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  Profiler.wrap(() => {
    global.cc = ConsoleCommands;
    console.log(`Current game tick is ${Game.time}`);

    // Automatically delete memory of missing creeps
    for (const name in Memory.creeps) {
      if (!(name in Game.creeps)) {
        delete Memory.creeps[name];
      }
    }
    Tools.log_info()
  });
});
