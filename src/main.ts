const startCpu = Game.cpu.getUsed()
import { ErrorMapper } from "tools/ErrorMapper";

import * as Profiler from "screeps-profiler";
import { USE_PROFILER } from "config";

import * as Inscribe from "screeps-inscribe";

import * as Logger from "tools/logger/logger";
import {ENABLE_DEBUG_MODE} from "config";

import * as Tools from "tools/tools"

import { ConsoleCommands } from "tools/consolecommands";

import { Emoji, Splash } from './tools/Emoji';

import * as Orga from "./organize.json";

import { StatsManager } from './tools/stats';



//New Script loaded
console.log(`[${Inscribe.color("New Script loaded", "red")}] ${Emoji.reload}`);


if (USE_PROFILER) {
  Logger.log.info("Profiler an: "+ USE_PROFILER);
  Profiler.enable();
}

// Get Script loading time
const elapsedCPU = Game.cpu.getUsed() - startCpu;
Splash();
console.log(`[${Inscribe.color("Script Loading needed: ", "skyblue") + elapsedCPU.toFixed(2) + " Ticks"}]`);

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  Profiler.wrap(() => {


    global.cc = ConsoleCommands;
    console.log(`Current game tick is ${Game.time}`);

    // Main Loop here:


    Tools.log_info()
    Tools.ClearNonExistingCreeMemory();
    StatsManager.runForAllRooms();
  });
});
