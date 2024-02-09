import { APIClient } from "../api"

export class Base {
  protected api: APIClient
  protected path: string

  constructor(path: string) {
    this.api = new APIClient()
    this.path = path
  }
}
