import * as Inscribe from "screeps-inscribe";

const Colors = ["cyan", "red", "green", "yellow", "white", "purple", "pink", "orange"];

export const ConsoleCommands = {

  test() {
    console.log(`[${Inscribe.color("CC", "red")}] Commands working`);
  },


  killall(roomName?: string) {
    _.forEach(Game.creeps, (c: Creep) => {
      if ((roomName && c.room.name === roomName) || !roomName) {
        c.suicide();
      }
    });
  }
};
