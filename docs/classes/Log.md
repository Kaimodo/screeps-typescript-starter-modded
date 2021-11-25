[screeps-typescript-starter-modded - v1.2.12](../README.md) / [Exports](../modules.md) / Log

# Class: Log

The Logger provides a more detailed logs to the Screeps console, which
includes the tick number, as well as a link back to the source code (if
configured).

Log level and output can be controlled from console by setting `level`,
`showSource` and `showTick` properties on the global `log` object.

**`export`**

## Table of contents

### Constructors

- [constructor](Log.md#constructor)

### Properties

- [sourceMap](Log.md#sourcemap)

### Methods

- [debug](Log.md#debug)
- [error](Log.md#error)
- [getFileLine](Log.md#getfileline)
- [info](Log.md#info)
- [print](Log.md#print)
- [trace](Log.md#trace)
- [warning](Log.md#warning)
- [loadSourceMap](Log.md#loadsourcemap)

## Constructors

### constructor

• **new Log**()

## Properties

### sourceMap

▪ `Static` **sourceMap**: `any`

#### Defined in

[tools/logger/logger.ts:94](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L94)

## Methods

### debug

▸ **debug**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[tools/logger/logger.ts:153](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L153)

___

### error

▸ **error**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[tools/logger/logger.ts:135](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L135)

___

### getFileLine

▸ **getFileLine**(`upStack?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `upStack` | `number` | `4` |

#### Returns

`string`

#### Defined in

[tools/logger/logger.ts:159](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L159)

___

### info

▸ **info**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[tools/logger/logger.ts:147](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L147)

___

### print

▸ **print**(`logLevel`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logLevel` | [`LogLevel`](../enums/LogLevel.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[tools/logger/logger.ts:110](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L110)

___

### trace

▸ **trace**(`error`): [`Log`](Log.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

[`Log`](Log.md)

#### Defined in

[tools/logger/logger.ts:127](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L127)

___

### warning

▸ **warning**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[tools/logger/logger.ts:141](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L141)

___

### loadSourceMap

▸ `Static` **loadSourceMap**(): `void`

#### Returns

`void`

#### Defined in

[tools/logger/logger.ts:96](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/logger/logger.ts#L96)
