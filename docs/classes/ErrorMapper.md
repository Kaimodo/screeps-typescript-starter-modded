[screeps-typescript-starter-modded - v1.2.12](../README.md) / [Exports](../modules.md) / ErrorMapper

# Class: ErrorMapper

## Table of contents

### Constructors

- [constructor](ErrorMapper.md#constructor)

### Properties

- [cache](ErrorMapper.md#cache)

### Accessors

- [consumer](ErrorMapper.md#consumer)

### Methods

- [sourceMappedStackTrace](ErrorMapper.md#sourcemappedstacktrace)
- [wrapLoop](ErrorMapper.md#wraploop)

## Constructors

### constructor

• **new ErrorMapper**()

## Properties

### cache

▪ `Static` **cache**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[tools/ErrorMapper.ts:16](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/ErrorMapper.ts#L16)

## Accessors

### consumer

• `Static` `get` **consumer**(): `SourceMapConsumer`

#### Returns

`SourceMapConsumer`

#### Defined in

[tools/ErrorMapper.ts:7](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/ErrorMapper.ts#L7)

## Methods

### sourceMappedStackTrace

▸ `Static` **sourceMappedStackTrace**(`error`): `string`

Generates a stack trace using a source map generate original symbol names.

WARNING - EXTREMELY high CPU cost for first call after reset - >30 CPU! Use sparingly!
(Consecutive calls after a reset are more reasonable, ~0.1 CPU/ea)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` \| `Error` | The error or original stack trace |

#### Returns

`string`

The source-mapped stack trace

#### Defined in

[tools/ErrorMapper.ts:27](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/ErrorMapper.ts#L27)

___

### wrapLoop

▸ `Static` **wrapLoop**(`loop`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loop` | () => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[tools/ErrorMapper.ts:71](https://github.com/Kaimodo/screeps-typescript-starter-modded/blob/b6b1c90/src/tools/ErrorMapper.ts#L71)
