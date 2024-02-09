import { APIClient } from "../api"
import { Calon } from "../types/model"
import { Dapil } from "../types"

export class Client<T> {
  protected api: APIClient
  protected path: string

  constructor(path: string) {
    this.api = new APIClient()
    this.path = path
  }

  async getDapilList(): Promise<Dapil[]> {
    try {
      const api = await this.api.get<Dapil[]>(`${this.path}/dapil/list`)

      if (api.status === "error")
        throw new Error(api.message || "Failed to get dapil list data")

      return api.data
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Failed to get dapil list data"
      )
    }
  }

  async getDapil(id: string): Promise<T[]> {
    try {
      const api = await this.api.get<T[]>(`${this.path}/dapil/${id}`)

      if (api.status === "error")
        throw new Error(api.message || "Failed to get dapil data")

      return api.data
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Failed to get dapil data"
      )
    }
  }

  async getCalon(id: string): Promise<T> {
    try {
      const api = await this.api.get<T>(`${this.path}/calon/${id}`)

      if (api.status === "error")
        throw new Error(api.message || "Failed to get calon data")

      return api.data
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Failed to get calon data"
      )
    }
  }
}
