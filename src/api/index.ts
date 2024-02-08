import ky, { KyInstance } from "ky"
import { KyOptions } from "ky/distribution/types/options"

export class APIClient {
  public client: KyInstance

  private static init(basePath: string, apiUrl?: string) {
    const client = ky.create({
      prefixUrl: apiUrl || basePath,
    })

    return client
  }

  constructor(basePath: string, apiUrl?: string) {
    this.client = APIClient.init(basePath, apiUrl)
  }

  public async get<T>(url: string, options?: KyOptions): Promise<T> {
    return await this.client.get(url, options).json()
  }
}
