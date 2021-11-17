import * as Inscribe from "screeps-inscribe";

const Colors = ["cyan", "red", "green", "yellow", "white", "purple", "pink", "orange"];

export const ConsoleCommands = {

  test() {
    console.log(`[${Inscribe.color("CC", "red")}] Commands working`);
  },
  /**
   * Shows List of Commands
   */
   help(): void {
    console.log(`[${Inscribe.color("CC", "skyblue")}] List of Commands:`);
    console.log(`[${Inscribe.color("CC", "skyblue")}] help() | Shows this list.`);
    console.log(`[${Inscribe.color("CC", "skyblue")}] test() | Check if Commands work`);
    console.log(`[${Inscribe.color("CC", "skyblue")}] cpuUsedParsing() | Show how much CPU is used for parsing the Memory`);
    console.log(`[${Inscribe.color("CC", "red")}] killAll(room name) | Kill all Screeps in given Room`);
    console.log(`[${Inscribe.color("CC", "red")}] destroyAllStruct() | Destroy all own Structures in ALL Rooms`);
    console.log(`[${Inscribe.color("CC", "red")}] rc(room-Name, leaveStarted, StructType) | Remove construction Sites`);
  },
  /**
   * Destroy all own Structures in ALL Rooms
   */
   destroyAllStruct(): void {
    for (const R in Game.rooms) {
      const room: Room = Game.rooms[R];
      let structures = room.find(FIND_STRUCTURES);
      if (structures.length > 0) {
        for (const s in structures) {
          structures[s].destroy();
        }
      }
    }
  },
  /**
   * Show CPU used for parsing Memory
   */
   cpuUsedParsing(){
    let stringified = JSON.stringify(Memory);
    let startCpu = Game.cpu.getUsed();
    JSON.parse(stringified);
    console.log("CPU used on Memory parsing: " + (Game.cpu.getUsed() - startCpu));
  },

  removeConstructionSites(roomName: string, leaveProgressStarted: boolean, structureType: string) {
    Game.rooms[roomName].find(FIND_MY_CONSTRUCTION_SITES).forEach((site) => {
        if ((!structureType || site.structureType === structureType) &&
            (!leaveProgressStarted || site.progress === 0)) {
            site.remove();
        }
    });
  },
  /**
   * Remove Construction Site
   *
   * @param {string} roomName
   * @param {boolean} leaveProgressStarted
   * @param {string} structureType
   */
  rc(roomName: string, leaveProgressStarted: boolean, structureType: string) {
      this.removeConstructionSites(roomName, leaveProgressStarted, structureType);
  },
  /**
   *
   *  Kill all Screeps in given Room
   * @param {string} [roomName]
   */
  killall(roomName?: string) {
    _.forEach(Game.creeps, (c: Creep) => {
      if ((roomName && c.room.name === roomName) || !roomName) {
        c.suicide();
      }
    });
  }
};
