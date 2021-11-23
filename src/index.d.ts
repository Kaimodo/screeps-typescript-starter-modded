// Game Memory
interface Memory {
    version?: string;
    date?: string;
    uuid: number;
    log: any;
}

interface CreepMemory {
    role: string;
    room: string;
    working?: boolean;
}

interface FlagMemory { [name: string]: any }
interface SpawnMemory { [name: string]: any }
interface RoomMemory {
    [name: string]: any;
}



// Syntax for adding proprties to `global` (ex "global.log")
declare namespace NodeJS {
    interface Global {
        cc: any;
        Profiler: any;
        log: {
            level: number,
            showSource: boolean,
            showTick: boolean
        };
    }
}
