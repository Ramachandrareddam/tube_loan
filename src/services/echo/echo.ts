// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  echoDataValidator,
  echoPatchValidator,
  echoQueryValidator,
  echoResolver,
  echoExternalResolver,
  echoDataResolver,
  echoPatchResolver,
  echoQueryResolver
} from './echo.schema'

import type { Application } from '../../declarations'
import { EchoService, getOptions } from './echo.class'

export const echoPath = 'echo'
export const echoMethods = ['create'] as const

export * from './echo.class'
export * from './echo.schema'

export const echo = (app: Application) => {
  app.use(echoPath, new EchoService(getOptions(app)), {
    methods: echoMethods,
    events: []
  })
  app.service(echoPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(echoExternalResolver), schemaHooks.resolveResult(echoResolver)]
    },
    before: {
      create: [schemaHooks.validateData(echoDataValidator), schemaHooks.resolveData(echoDataResolver)],
     
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

declare module '../../declarations' {
  interface ServiceTypes {
    [echoPath]: EchoService
  }
}
