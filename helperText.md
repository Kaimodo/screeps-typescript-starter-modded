Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE,MOVE], "Creep3");
Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE. MOVE], 'Upgrader1' );
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'Upgrader2' );
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'Harvester1' );
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'Harvester2' );

Game.spawns['Spawn1'].spawnCreep([MOVE,CARRY,WORK,MOVE],'Harv1',{memory:{role:'Harvester'}});
Game.spawns['Spawn1'].spawnCreep([MOVE,CARRY,WORK,MOVE],'Upg1',{memory:{role:'Upgrader'}});

Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';

unicode-table.com

BODYPARTS
https://screeps.fandom.com/wiki/Creep#Body_Parts
https://screepspl.us/services/creep-calculator/
function bodyCost(body)
{
    let sum = 0;
    for (let i in body)
        sum += BODYPART_COST[body[i]];
    return sum;
}
console.log(bodyCost([WORK, CARRY, MOVE]));

// oneliner with lodash
const bodyCost = _.sum([WORK,MOVE,CARRY], b => BODYPART_COST[b]);

Building/screeps Planer
https://screeps.admon.dev/building-planner

Game.flags['Flag1'].pos.createConstructionSite(STRUCTURE_ROAD);
Defense Basics
function defendRoom(roomName) {
    var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
    if(hostiles.length > 0) {
        var username = hostiles[0].owner.username;
        Game.notify(`User ${username} spotted in room ${roomName}`);
        var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        towers.forEach(tower => tower.attack(hostiles[0]));
    }
}
Tower rabge
amount -= amount * C.TOWER_FALLOFF * (range - C.TOWER_OPTIMAL_RANGE) / (C.TOWER_FALLOFF_RANGE - C.TOWER_OPTIMAL_RANGE);

https://docs.screeps.com/api/

Priv server commands
https://wiki.screepspl.us/index.php/Private_Server_Common_Tasks

https://github.com/Clesoud/screeps/blob/master/Tutorials/02.%20Upgrading%20Controller%20*

https://linguinecode.com/post/how-to-solve-typescript-possibly-undefined-value

https://github.com/kurax/screeps/blob/master/src/main.ts

https://github.com/Archheretic/screeps-ts/blob/main/src/Spawner.ts

https://github.com/Wakkashamshay/screeps/blob/master/src/roleHarvester.ts

https://github.com/Elbarae1921/screeps-bot/blob/master/src/spawns/actions/makeCreeps.ts

Profiler

Screeps Profiler Build Status Coverage Status
The Screeps Profiler is a library that helps to understand where your CPU is being spent in the game of Screeps.

It works by monkey patching functions on the Global game object prototypes, with a function that record how long each function takes. The primary benefit of using this profiler is that you can get a clear picture of where your CPU is being used over time, and optimize some of the heavier functions. While it works best for players that heavily employ prototypes in their code, it should work to some degree for all players.

Setup
Installation
You have two options for installing this script. You can either use npm and a compiler like webpack, or you can copy/paste the screeps-profiler.js file and use the provided screeps require function.

Main.js
Your main.js will will need to be configured like so.

// Any modules that you use that modify the game's prototypes should be require'd
// before you require the profiler.
const profiler = require('screeps-profiler');

// This line monkey patches the global prototypes.
profiler.enable();
module.exports.loop = function() {
  profiler.wrap(function() {
    // Main.js logic should go here.
  });
}
Console API
You can make use of the profiler via the Screeps console.

Game.profiler.profile(ticks, [functionFilter]);
Game.profiler.stream(ticks, [functionFilter]);
Game.profiler.email(ticks, [functionFilter]);
Game.profiler.background([functionFilter]);

// Output current profile data.
Game.profiler.output([lineCount]);

// Reset the profiler, disabling any profiling in the process.
Game.profiler.reset();

Game.profiler.restart();
Note: It can take up to 30 ticks if you're using module.exports.loop for these commands to work without issue.

profile - Will run for the given number of ticks then will output the gathered information to the console.

stream - Will run for the given number of ticks, and will output the gathered information each tick to the console. The can sometimes be useful for seeing spikes in performance.

email - This will run for the given number of ticks, and will email the output to your registered Screeps email address. Very useful for long running profiles.

background - This will run indefinitely, and will only output data when the output console command is run. Very useful for long running profiles with lots of function calls.

output - Print a report based on the current tick. The profiler will continue to operate normally. This is currently the only way to get data from the background profile.

reset - Stops the profiler and resets its memory. This is currently the only way to stop a background profile.

restart - Restarts the profiler using the same options previously used to start it.

In each case, ticks controls how long the profiler should run before stopping, and the optional functionFilter parameter will limit the scope of the profiler to a specific function.

Example output
Below is a sample output of Game.profiler.profile(1000)

calls    time        avg       function
2000     12293.9,    6.147     Room.work
10914    6025.0,     0.552     Creep.work
2000     3534.5,     1.767     Spawn.work
70000    1949.3,     0.028     Structure.work
2832     1733.8,     0.612     Creep.moveTo
3727     1093.7,     0.293     Creep.moveToAndHarvest
1659     886.0,      0.534     Creep.takeEnergyFrom
8466     871.9,      0.103     Room.createConstructionSite
3500     852.7,      0.244     Creep.harvest
975      745.8,      0.765     Creep.deliverEnergyTo
2615     741.1,      0.283     Room.needsCouriers
278      700.5,      2.520     RoomPosition.findPathTo
278      673.6,      2.423     Room.findPath
21342    575.4,      0.027     Spawn.availableEnergy
2805     535.1,      0.191     Room.getStorage
2108     511.7,      0.243     Creep.move
1830     487.1,      0.266     Creep.moveByPath
1439     483.9,      0.336     Creep.moveToAndUpgrade
26596    454.5,      0.017     Room.find
4247     443.1,      0.104     Room.droppedControllerEnergy
Avg: 15.43 Total: 15425.31 Ticks: 1000 Est. Bucket (20 limit): 5055
Seeing that Spawn.work is high, we might run Game.profiler.profile(200, 'Spawn.work') to see what about Spawn.work is taking so long. From that we would get:

calls    time        avg        function
62       137.7,      2.221      Spawn.work
103      25.8,       0.251      Room.needsCouriers
41       23.9,       0.583      Room.needsUpgraders
41       18.6,       0.452      Room.needsHarvesters
41       17.6,       0.429      Room.getSourcesNeedingHarvesters
105      16.1,       0.154      Room.getStorage
548      14.9,       0.027      Spawn.availableEnergy
341      12.1,       0.035      Room.find
62       8.4,        0.135      Room.harvesterCount
48       8.3,        0.174      Spawn.extend
211      7.9,        0.037      Room.getExtensions
41       7.3,        0.178      Room.droppedControllerEnergy
103      7.1,        0.069      Room.courierCount
62       7.1,        0.115      Room.getHarvesters
41       6.5,        0.158      Room.needsBuilders
12       6.1,        0.509      Spawn.buildBuilder
62       5.8,        0.094      Room.setupFlags
103      5.6,        0.055      Room.getCouriers
15       5.0,        0.330      Room.upgraderWorkParts
41       4.8,        0.116      Room.builderCount
Avg: 13.54 Total: 2707.90 Ticks: 200 Est. Bucket (20 limit): 1774
Note: Each function recorded here was part of a call stack with Spawn.work at the root.

Registering additional code
The profiler automatically registers many of the built in functions in Screeps, but not every player extends the provided prototypes. The profiler supports arbitrary registration of objects and functions as well, but takes a bit more work to setup. In order to do it, you'll need to import the profiler wherever you want to register a function, then call registerClass, registerObject, or registerFN.

Example:

const profiler = require('screeps-profiler');

class SuperOmegaCreep {
  work() {
    hiddenManagersPlaybook.delegate();
  }
}

// Each of the functions on this class will be replaced with a profiler wrapper. The second parameter
// is a required label.
profiler.registerClass(SuperOmegaCreep, 'SuperOmegaCreep');

const gameHandlerObject = {
  handleGame: () => {
    // do some work.
  }
};

// Each of the functions on this object will be replaced with a profiler wrapper. The second parameter
// is a required label.
profiler.registerObject(gameHandlerObject, 'gameHandlerObject');

function getAllScouts() {
  return Object.keys(Game.creeps).filter(creepName => {
    const creep = Game.creeps[creepName];
    return creep.memory.role === 'scout';
  });
}

// Be sure to reassign the function, we can't alter functions that are passed.
getAllScouts = profiler.registerFN(getAllScouts, 'mySemiOptionalName');
Note: The second param is optional if you pass a named function function x() {}, but required if you pass an anonymous function var x = function(){}.

Potential Overhead
There is some work to setting up the functions for profiling. While this work is kept to a minimum when the profiler is not in use, it may be beneficial to comment out or remove the profiler.enable() call when you know you aren't going to be using it. This will revert the monkey patched functions to their original functions.




R WEG
https://github.com/stephenreynolds/screeps/blob/master/src/main.ts

const enableProfiling = __SCRIPT_BRANCH__!.match("dev");
setupProfiling();

export const loop = ErrorMapper.wrapLoop(() => enableProfiling ? profiler.wrap(() => main()) : main());

function main()
{
    global.cc = ConsoleCommands;
    global.cc.profiler = Game.profiler;

    const scheduler = new Scheduler();
    scheduler.run();

    getStats();
}

function getStats()
{
    Memory.stats["cpu.getUsed"] = Game.cpu.getUsed();
    Memory.stats["cpu.limit"] = Game.cpu.limit;
    Memory.stats["cpu.bucket"] = Game.cpu.bucket;
    Memory.stats["gcl.progress"] = Game.gcl.progress;
    Memory.stats["gcl.progressTotal"] = Game.gcl.progressTotal;
    Memory.stats["gcl.level"] = Game.gcl.level;
}

function setupProfiling()
{
    if (enableProfiling)
    {
        profiler.enable();

        profiler.registerClass(RoomPathFinder, "RoomPathFinder");
        profiler.registerObject(CreepBuilder, "CreepBuilder");
        profiler.registerObject(Utils, "Utils");

        for (const processType in ProcessTypes)
        {
            const type = ProcessTypes[processType];
            profiler.registerClass(type, type.name);
        }
    }
}
ENDE R WEG

---------------------------------
export const makeCreeps = () => {
    const rooms = getRooms();
    for (const room of rooms) {
        for (const role of CREEP_ROLES_AND_PARTS) {
            if (!role.need(getConstructionSites(room), getUsefulRuins(room))) {
                continue;
            }
            const creeps = room.find(FIND_MY_CREEPS).filter(c => c.memory.role === role.role);
            if (creeps.length < role.count) {
                const spawns = room.find(FIND_MY_SPAWNS);
                for (const spawn of spawns) {
                    if (!spawn.spawning) {
                        Memory.index = Memory.index ? Memory.index + 1 : 0;
                        const body = creepBody(
                            role.maxParts,
                            role.parts,
                            spawn.room.energyAvailable
                        );
                        const result = spawn.spawnCreep(body, `${role.role}_${Memory.index}`, {
                            memory: { role: role.role }
                        });
                        if (result == 0) {
                            break;
                        }
                    }
                }
                break;
            }
        }
    }
};
-----------------------------------
Aktuell loggger Bsp:
log.info(`Started creating new creep: ${creepName}`)
    if (ENABLE_DEBUG_MODE) {
      log.debug(`Body: ${bodyParts}`)
      log.debug(`guid: ${guid}`)
    }

    status = spawn.createCreep(bodyParts, creepName, properties)

    return _.isString(status) ? OK : status
  } else {
    if (ENABLE_DEBUG_MODE) {
      log.error(`Failed creating new creep: ${status}`)
    }

https://github.com/glitchassassin/screeps-viz

profiler

Screeps Profiler Build Status Coverage Status
The Screeps Profiler is a library that helps to understand where your CPU is being spent in the game of Screeps.

It works by monkey patching functions on the Global game object prototypes, with a function that record how long each function takes. The primary benefit of using this profiler is that you can get a clear picture of where your CPU is being used over time, and optimize some of the heavier functions. While it works best for players that heavily employ prototypes in their code, it should work to some degree for all players.

Setup
Installation
You have two options for installing this script. You can either use npm and a compiler like webpack, or you can copy/paste the screeps-profiler.js file and use the provided screeps require function.

Main.js
Your main.js will will need to be configured like so.

// Any modules that you use that modify the game's prototypes should be require'd
// before you require the profiler.
const profiler = require('screeps-profiler');

// This line monkey patches the global prototypes.
profiler.enable();
module.exports.loop = function() {
  profiler.wrap(function() {
    // Main.js logic should go here.
  });
}
Console API
You can make use of the profiler via the Screeps console.

Game.profiler.profile(ticks, [functionFilter]);
Game.profiler.stream(ticks, [functionFilter]);
Game.profiler.email(ticks, [functionFilter]);
Game.profiler.background([functionFilter]);

// Output current profile data.
Game.profiler.output([lineCount]);

// Reset the profiler, disabling any profiling in the process.
Game.profiler.reset();

Game.profiler.restart();
Note: It can take up to 30 ticks if you're using module.exports.loop for these commands to work without issue.

profile - Will run for the given number of ticks then will output the gathered information to the console.

stream - Will run for the given number of ticks, and will output the gathered information each tick to the console. The can sometimes be useful for seeing spikes in performance.

email - This will run for the given number of ticks, and will email the output to your registered Screeps email address. Very useful for long running profiles.

background - This will run indefinitely, and will only output data when the output console command is run. Very useful for long running profiles with lots of function calls.

output - Print a report based on the current tick. The profiler will continue to operate normally. This is currently the only way to get data from the background profile.

reset - Stops the profiler and resets its memory. This is currently the only way to stop a background profile.

restart - Restarts the profiler using the same options previously used to start it.

In each case, ticks controls how long the profiler should run before stopping, and the optional functionFilter parameter will limit the scope of the profiler to a specific function.

Example output
Below is a sample output of Game.profiler.profile(1000)

calls    time        avg       function
2000     12293.9,    6.147     Room.work
10914    6025.0,     0.552     Creep.work
2000     3534.5,     1.767     Spawn.work
70000    1949.3,     0.028     Structure.work
2832     1733.8,     0.612     Creep.moveTo
3727     1093.7,     0.293     Creep.moveToAndHarvest
1659     886.0,      0.534     Creep.takeEnergyFrom
8466     871.9,      0.103     Room.createConstructionSite
3500     852.7,      0.244     Creep.harvest
975      745.8,      0.765     Creep.deliverEnergyTo
2615     741.1,      0.283     Room.needsCouriers
278      700.5,      2.520     RoomPosition.findPathTo
278      673.6,      2.423     Room.findPath
21342    575.4,      0.027     Spawn.availableEnergy
2805     535.1,      0.191     Room.getStorage
2108     511.7,      0.243     Creep.move
1830     487.1,      0.266     Creep.moveByPath
1439     483.9,      0.336     Creep.moveToAndUpgrade
26596    454.5,      0.017     Room.find
4247     443.1,      0.104     Room.droppedControllerEnergy
Avg: 15.43 Total: 15425.31 Ticks: 1000 Est. Bucket (20 limit): 5055
Seeing that Spawn.work is high, we might run Game.profiler.profile(200, 'Spawn.work') to see what about Spawn.work is taking so long. From that we would get:

calls    time        avg        function
62       137.7,      2.221      Spawn.work
103      25.8,       0.251      Room.needsCouriers
41       23.9,       0.583      Room.needsUpgraders
41       18.6,       0.452      Room.needsHarvesters
41       17.6,       0.429      Room.getSourcesNeedingHarvesters
105      16.1,       0.154      Room.getStorage
548      14.9,       0.027      Spawn.availableEnergy
341      12.1,       0.035      Room.find
62       8.4,        0.135      Room.harvesterCount
48       8.3,        0.174      Spawn.extend
211      7.9,        0.037      Room.getExtensions
41       7.3,        0.178      Room.droppedControllerEnergy
103      7.1,        0.069      Room.courierCount
62       7.1,        0.115      Room.getHarvesters
41       6.5,        0.158      Room.needsBuilders
12       6.1,        0.509      Spawn.buildBuilder
62       5.8,        0.094      Room.setupFlags
103      5.6,        0.055      Room.getCouriers
15       5.0,        0.330      Room.upgraderWorkParts
41       4.8,        0.116      Room.builderCount
Avg: 13.54 Total: 2707.90 Ticks: 200 Est. Bucket (20 limit): 1774
Note: Each function recorded here was part of a call stack with Spawn.work at the root.

Registering additional code
The profiler automatically registers many of the built in functions in Screeps, but not every player extends the provided prototypes. The profiler supports arbitrary registration of objects and functions as well, but takes a bit more work to setup. In order to do it, you'll need to import the profiler wherever you want to register a function, then call registerClass, registerObject, or registerFN.

Example:

const profiler = require('screeps-profiler');

class SuperOmegaCreep {
  work() {
    hiddenManagersPlaybook.delegate();
  }
}

// Each of the functions on this class will be replaced with a profiler wrapper. The second parameter
// is a required label.
profiler.registerClass(SuperOmegaCreep, 'SuperOmegaCreep');

const gameHandlerObject = {
  handleGame: () => {
    // do some work.
  }
};

// Each of the functions on this object will be replaced with a profiler wrapper. The second parameter
// is a required label.
profiler.registerObject(gameHandlerObject, 'gameHandlerObject');

function getAllScouts() {
  return Object.keys(Game.creeps).filter(creepName => {
    const creep = Game.creeps[creepName];
    return creep.memory.role === 'scout';
  });
}

// Be sure to reassign the function, we can't alter functions that are passed.
getAllScouts = profiler.registerFN(getAllScouts, 'mySemiOptionalName');
Note: The second param is optional if you pass a named function function x() {}, but required if you pass an anonymous function var x = function(){}.

Potential Overhead
There is some work to setting up the functions for profiling. While this work is kept to a minimum when the profiler is not in use, it may be beneficial to comment out or remove the profiler.enable() call when you know you aren't going to be using it. This will revert the monkey patched functions to their original functions.
