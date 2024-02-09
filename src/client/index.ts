import { APIClient } from "../api"

export class Client {
  protected api: APIClient

  constructor() {
    this.api = new APIClient()
  }
}
