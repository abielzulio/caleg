import ky, { KyInstance } from "ky"
import { KyOptions } from "ky/distribution/types/options"

const BASE_URL = "https://caleg.zakiego.com/api"

export type APIResponse<T> = {
  data: T
  status: string
  message?: string
}
export class APIClient {
  public client: KyInstance

  private static init() {
    const client = ky.create({
      prefixUrl: BASE_URL,
    })

    return client
  }

  constructor() {
    this.client = APIClient.init()
  }

  public async get<T>(
    url: string,
    options?: KyOptions
  ): Promise<APIResponse<T>> {
    return await this.client.get(url, options).json<APIResponse<T>>()
  }
}
