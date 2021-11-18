const startCpu = Game.cpu.getUsed()
import { ErrorMapper } from "tools/ErrorMapper";

import * as Profiler from "screeps-profiler";
import { USE_PROFILER } from "config";

import * as Inscribe from "screeps-inscribe";

import * as Logger from "tools/logger/logger";
import {ENABLE_DEBUG_MODE} from "config";

import * as Tools from "tools/tools"

import { ConsoleCommands } from "tools/consolecommands";

import { Emoji } from './tools/Emoji';



//New Script loaded
console.log(`[${Inscribe.color("New Script loaded", "red")}] ${Emoji.reload}`);

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

// Get Script loading time
const elapsedCPU = Game.cpu.getUsed() - startCpu;

console.log(`[${Inscribe.color("Script Loading needed: ", "skyblue") + elapsedCPU.toFixed(2) + " Ticks"}]`);

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  Profiler.wrap(() => {

    try {
      const name = process.env.npm_package_name;
      const version = process.env.npm_package_version;
      if (!Memory.version || Memory.version !== version) {
        Memory.version = version;
        console.log(`${String(name)} ${String(version)}`);
      }
    } catch (error) {
      console.log(error);
    }


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
