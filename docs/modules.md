[screeps-typescript-starter-modded - v1.2.12](README.md) / Exports

# screeps-typescript-starter-modded - v1.2.12

## Table of contents

### Enumerations

- [LogLevel](enums/LogLevel.md)

### Classes

- [ErrorMapper](classes/ErrorMapper.md)
- [Log](classes/Log.md)

### Variables

- [ConsoleCommands](modules.md#consolecommands)
- [ENABLE\_DEBUG\_MODE](modules.md#enable_debug_mode)
- [Emoji](modules.md#emoji)
- [FIRST\_ROOM\_NAME](modules.md#first_room_name)
- [LOG\_LEVEL](modules.md#log_level)
- [LOG\_LOAD\_SOURCE\_MAP](modules.md#log_load_source_map)
- [LOG\_MAX\_PAD](modules.md#log_max_pad)
- [LOG\_PRINT\_LINES](modules.md#log_print_lines)
- [LOG\_PRINT\_TICK](modules.md#log_print_tick)
- [LOG\_VSC](modules.md#log_vsc)
- [USE\_PROFILER](modules.md#use_profiler)
- [log](modules.md#log)

### Functions

- [ClearNonExistingCreeMemory](modules.md#clearnonexistingcreememory)
- [LOG\_VSC\_URL\_TEMPLATE](modules.md#log_vsc_url_template)
- [Splash](modules.md#splash)
- [\_clearMemory](modules.md#_clearmemory)
- [distance](modules.md#distance)
- [forEachCreep](modules.md#foreachcreep)
- [generatePixel](modules.md#generatepixel)
- [initLoggerMemory](modules.md#initloggermemory)
- [log\_info](modules.md#log_info)
- [loop](modules.md#loop)
- [resolve](modules.md#resolve)
- [roomLink](modules.md#roomlink)

## Variables

### ConsoleCommands

• **ConsoleCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cpuUsedParsing` | () => `void` |
| `destroyAllStruct` | () => `void` |
| `help` | () => `void` |
| `killall` | (`roomName?`: `string`) => `void` |
| `rc` | (`roomName`: `string`, `leaveProgressStarted`: `boolean`, `structureType`: `string`) => `void` |
| `removeConstructionSites` | (`roomName`: `string`, `leaveProgressStarted`: `boolean`, `structureType`: `string`) => `void` |
| `test` | () => `void` |

#### Defined in

[tools/consolecommands.ts:5](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/consolecommands.ts#L5)

___

### ENABLE\_DEBUG\_MODE

• **ENABLE\_DEBUG\_MODE**: `boolean` = `true`

Enable this if you want a lot of text to be logged to console.

#### Defined in

[config.ts:10](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L10)

___

### Emoji

• **Emoji**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attack_controller` | `string` |
| `avoiding` | `string` |
| `baby` | `string` |
| `boosting` | `string` |
| `building` | `string` |
| `bulldozing` | `string` |
| `charging` | `string` |
| `claiming` | `string` |
| `cross` | `string` |
| `debug` | `string` |
| `defending` | `string` |
| `dismantling` | `string` |
| `dropping` | `string` |
| `feeding` | `string` |
| `flag` | `string` |
| `fortifying` | `string` |
| `fueling` | `string` |
| `guarding` | `string` |
| `harvesting` | `string` |
| `healing` | `string` |
| `home` | `string` |
| `idle` | `string` |
| `info` | `string` |
| `invading` | `string` |
| `lab` | `string` |
| `mining` | `string` |
| `module` | `string` |
| `order` | `string` |
| `picking` | `string` |
| `reallocating` | `string` |
| `recycling` | `string` |
| `reload` | `string` |
| `repairing` | `string` |
| `reserving` | `string` |
| `robbing` | `string` |
| `safegen` | `string` |
| `skull` | `string` |
| `storing` | `string` |
| `terminal` | `string` |
| `tick` | `string` |
| `travelling` | `string` |
| `uncharging` | `string` |
| `upgrading` | `string` |
| `wait` | `string` |
| `walk` | `string` |
| `warn` | `string` |
| `withdrawing` | `string` |

#### Defined in

[tools/Emoji.ts:1](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/Emoji.ts#L1)

___

### FIRST\_ROOM\_NAME

• **FIRST\_ROOM\_NAME**: `string` = `Game.spawns.Spawn1.room.name`

#### Defined in

[config.ts:12](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L12)

___

### LOG\_LEVEL

• **LOG\_LEVEL**: `number` = `LogLevel.DEBUG`

Debug level for log output

#### Defined in

[config.ts:20](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L20)

___

### LOG\_LOAD\_SOURCE\_MAP

• **LOG\_LOAD\_SOURCE\_MAP**: `boolean` = `true`

Load source maps and resolve source lines back to typeascript.

#### Defined in

[config.ts:35](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L35)

___

### LOG\_MAX\_PAD

• **LOG\_MAX\_PAD**: `number` = `100`

Maximum padding for source links (for aligning log output).

#### Defined in

[config.ts:40](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L40)

___

### LOG\_PRINT\_LINES

• **LOG\_PRINT\_LINES**: `boolean` = `true`

Prepend log output with source line.

#### Defined in

[config.ts:30](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L30)

___

### LOG\_PRINT\_TICK

• **LOG\_PRINT\_TICK**: `boolean` = `true`

Prepend log output with current tick number.

#### Defined in

[config.ts:25](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L25)

___

### LOG\_VSC

• **LOG\_VSC**: `Object`

VSC location, used to create links back to source.
Repo and revision are filled in at build time for git repositories.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `repo` | `string` |
| `revision` | `string` |
| `valid` | `boolean` |

#### Defined in

[config.ts:46](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L46)

___

### USE\_PROFILER

• **USE\_PROFILER**: `boolean` = `true`

Enable this to enable screeps profiler

#### Defined in

[config.ts:4](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L4)

___

### log

• **log**: [`Log`](classes/Log.md)

#### Defined in

[tools/logger/logger.ts:220](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L220)

## Functions

### ClearNonExistingCreeMemory

▸ **ClearNonExistingCreeMemory**(): `void`

#### Returns

`void`

#### Defined in

[tools/tools.ts:14](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/tools.ts#L14)

___

### LOG\_VSC\_URL\_TEMPLATE

▸ `Const` **LOG_VSC_URL_TEMPLATE**(`path`, `line`): `string`

URL template for VSC links, this one works for github and gitlab.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `line` | `string` |

#### Returns

`string`

#### Defined in

[config.ts:52](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/config.ts#L52)

___

### Splash

▸ `Const` **Splash**(): `void`

#### Returns

`void`

#### Defined in

[tools/Emoji.ts:53](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/Emoji.ts#L53)

___

### \_clearMemory

▸ **_clearMemory**(): `void`

clear Memory

**`export`** _clearMemory

#### Returns

`void`

#### Defined in

[tools/tools.ts:28](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/tools.ts#L28)

___

### distance

▸ **distance**(`start`, `end`): `number`

Get the average distance between Start and End point.

**`export`** distance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `Object` | Start Position (x,y) |
| `start.x` | `number` | - |
| `start.y` | `number` | - |
| `end` | `Object` | End Position (x,y) |
| `end.x` | `number` | - |
| `end.y` | `number` | - |

#### Returns

`number`

{number} The distance between both points as Number

#### Defined in

[tools/tools.ts:88](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/tools.ts#L88)

___

### forEachCreep

▸ `Const` **forEachCreep**(`func`): `void`

Does the function with each Creep.

**`export`** forEachCreep

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (`item`: `Creep`) => `void` | The given Function |

#### Returns

`void`

#### Defined in

[tools/tools.ts:77](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/tools.ts#L77)

___

### generatePixel

▸ **generatePixel**(`bucketHight`): `void`

Generate Pixel if Bucket >= number

**`export`** generatePixel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bucketHight` | `number` | The Amount of minimal Bucket |

#### Returns

`void`

#### Defined in

[tools/tools.ts:56](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/tools.ts#L56)

___

### initLoggerMemory

▸ **initLoggerMemory**(): `void`

Initialise the logger memory.

**`export`**

#### Returns

`void`

#### Defined in

[tools/logger/logger.ts:44](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L44)

___

### log\_info

▸ **log_info**(): `void`

#### Returns

`void`

#### Defined in

[tools/tools.ts:5](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/tools.ts#L5)

___

### loop

▸ `Const` **loop**(): `void`

#### Returns

`void`

#### Defined in

[main.ts:38](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/main.ts#L38)

___

### resolve

▸ **resolve**(`fileLine`): `SourcePos`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileLine` | `string` |

#### Returns

`SourcePos`

#### Defined in

[tools/logger/logger.ts:17](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L17)

___

### roomLink

▸ **roomLink**(`roomName`): `string`

Creates a Link to the given Room

**`export`** roomLink

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roomName` | `string` | The Room name |

#### Returns

`string`

Link

#### Defined in

[tools/tools.ts:68](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/tools.ts#L68)
