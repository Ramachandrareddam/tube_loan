import { echo } from './echo/echo'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(echo)
}
