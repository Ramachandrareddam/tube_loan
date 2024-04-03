import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type { Echo, EchoData, EchoPatch, EchoQuery } from './echo.schema'

export type { Echo, EchoData, EchoPatch, EchoQuery }

export interface EchoServiceOptions {
  app: Application
}

export interface EchoParams extends Params<EchoQuery> {}

export class EchoService<ServiceParams extends EchoParams = EchoParams>
  implements ServiceInterface<Echo, EchoData, ServiceParams, EchoPatch>
{
  constructor(public options: EchoServiceOptions) {}

  async create(data: EchoData ): Promise<EchoData> {
    return data;
  }

}

export const getOptions = (app: Application) => {
  return { app }
}
