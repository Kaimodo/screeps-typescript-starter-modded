const startCpu = Game.cpu.getUsed()
import { ErrorMapper } from "tools/ErrorMapper";

import * as Profiler from "screeps-profiler";
import { USE_PROFILER } from "config";

import * as Inscribe from "screeps-inscribe";

import { log } from "tools/logger/logger";
import {ENABLE_DEBUG_MODE} from "config";

import * as Tools from "tools/tools"

import { ConsoleCommands } from "tools/consolecommands";

import { Emoji, Splash } from './tools/Emoji';

import * as Orga from "./organize.json";

import { StatsManager } from './tools/stats';



//New Script loaded
console.log(`[${Inscribe.color("New Script loaded", "red")}] ${Emoji.reload}`);


if (USE_PROFILER) {
  log.info("Profiler an: "+ USE_PROFILER);
  Profiler.enable();
}

// Clear Memory
Tools.clearMemory()

// Get Script loading time
Splash();
const elapsedCPU = Game.cpu.getUsed() - startCpu;
console.log(`[${Inscribe.color("Script Loading needed: ", "skyblue") + elapsedCPU.toFixed(2) + " Ticks"}]`);

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  Profiler.wrap(() => {


    global.cc = ConsoleCommands;
    console.log(`Current game tick is ${Game.time}`);
    log.debug("db");
    log.warning("warn");
    log.info("inf");
    log.error("err");


    // Main Loop here:


    Tools.log_info()
    Tools.ClearNonExistingCreeMemory();
    StatsManager.runForAllRooms();
  });
});
