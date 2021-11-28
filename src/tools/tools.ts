import * as Inscribe from "screeps-inscribe";
import * as Config from "config";


export function log_info() {
  // Periodic logging of useful info
  if (Game.time % 100 === 0) {
    // CPU: limit: 30, tickLimit: 500, bucket: 10000, used: 4.08803
    console.log(
      `[${Inscribe.color(Config.FIRST_ROOM_NAME, "skyblue")}]| Game-Tick: ${Game.time}` + "| CPU Used: " + Game.cpu.getUsed() + "| Buck: " + Game.cpu.bucket
    );
  }
}
export function ClearNonExistingCreeMemory() {
  if (Game.time % 100 === 0) {
    for (const name in Memory.creeps) {
      if (!(name in Game.creeps)) {
        delete Memory.creeps[name];
        console.log(`[${Inscribe.color("Clearing non-existing creep memory: " + name, "red")}]`);
      }
    }
  }
}
/**
 * clear Memory
 * @export clearMemory
 */
 export function clearMemory(): void {
  for (const name in Memory.flags) {
    if (!(name in Game.flags)) {
      delete Memory.flags[name];
    }
  }
  for (const name in Memory.spawns) {
    if (!(name in Game.spawns)) {
      delete Memory.spawns[name];
    }
  }
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
  for (const name in Memory.rooms) {
    if (!(name in Game.rooms)) {
      delete Memory.rooms[name];
    }
  }
}

/**
 * Generate Pixel if Bucket >= number
 * @export generatePixel
 * @param bucketHight The Amount of minimal Bucket
 */
 export function generatePixel(bucketHight: number): void {
  if (Game.cpu.bucket >= bucketHight) {
      Game.cpu.generatePixel();
  }
}

/**
 * Creates a Link to the given Room
 * @export roomLink
 * @param roomName The Room name
 * @returns Link
 */
export function roomLink(roomName: string): string {
  return `<a href="https://screeps.com/a/#!/room/${Game.shard.name}/${roomName}">${roomName}</a>`;
}

/**
 * Does the function with each Creep.
 * @export forEachCreep
 * @param func The given Function
 */
export const forEachCreep = (func: (item: Creep) => void): void => {
  Object.values(Game.creeps).forEach((creep) => func(creep));
};

/**
 * Get the average distance between Start and End point.
 * @export distance
 * @param {{ x: number; y: number }} start Start Position (x,y)
 * @param {{ x: number; y: number }} end End Position (x,y)
 * @return {*}  {number} The distance between both points as Number
 */
export function distance(start: { x: number; y: number }, end: { x: number; y: number }): number {
  return Math.max(Math.abs(start.x - end.x), Math.abs(start.y - end.y));
}

/**
 * The maximum is exclusive and the minimum is inclusive
 * @export getRandomInt
 * @param {number} min Minimal Number
 * @param {number} max Maximal Number
 * @return {*}  {number}
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Calculate the Distance betweens two Room-Positions
 * @export CalculateDistanceBetweenPoints
 * @param {RoomPosition} posA First Position
 * @param {RoomPosition} posB Second Position
 * @return {*}  {number}
 */
export function CalculateDistanceBetweenPoints(posA: RoomPosition, posB: RoomPosition): number {
  const a = Math.abs(posA.x - posB.x);
  const b = Math.abs(posA.y - posB.y);
  const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return c;
}

/**
 * Returns the reverse direction of Imput
 * @param direction The given Direction
 * @returns direction
 */
export const getReverseDirection = (direction: DirectionConstant) => {
  switch (direction) {
    case TOP:
      return BOTTOM;
    case TOP_RIGHT:
      return BOTTOM_LEFT;
    case RIGHT:
      return LEFT;
    case BOTTOM_RIGHT:
      return TOP_LEFT;
    case BOTTOM:
      return TOP;
    case BOTTOM_LEFT:
      return TOP_RIGHT;
    case LEFT:
      return RIGHT;
    case TOP_LEFT:
      return BOTTOM_RIGHT;
  }
}
