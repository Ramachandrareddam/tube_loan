import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { EchoService } from './echo.class'

export const echoSchema = {
  $id: 'Echo',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: { }
} as const
export type Echo = FromSchema<typeof echoSchema>
export const echoValidator = getValidator(echoSchema, dataValidator)
export const echoResolver = resolve<Echo, HookContext<EchoService>>({})

export const echoExternalResolver = resolve<Echo, HookContext<EchoService>>({})

export const echoDataSchema = {
  $id: 'EchoData',
  type: 'object',
  additionalProperties: true,
  required: [],
  properties: {
    ...echoSchema.properties
  }
} as const
export type EchoData = FromSchema<typeof echoDataSchema>
export const echoDataValidator = getValidator(echoDataSchema, dataValidator)
export const echoDataResolver = resolve<EchoData, HookContext<EchoService>>({})

export const echoPatchSchema = {
  $id: 'EchoPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...echoSchema.properties
  }
} as const
export type EchoPatch = FromSchema<typeof echoPatchSchema>
export const echoPatchValidator = getValidator(echoPatchSchema, dataValidator)
export const echoPatchResolver = resolve<EchoPatch, HookContext<EchoService>>({})

export const echoQuerySchema = {
  $id: 'EchoQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(echoSchema.properties)
  }
} as const
export type EchoQuery = FromSchema<typeof echoQuerySchema>
export const echoQueryValidator = getValidator(echoQuerySchema, queryValidator)
export const echoQueryResolver = resolve<EchoQuery, HookContext<EchoService>>({})
