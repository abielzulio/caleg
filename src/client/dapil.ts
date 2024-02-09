import { APIClient } from "../api"
import { Dapil as DapilModel } from "../types"
import { Base } from "./utils"

export class Dapil<T> extends Base {
  constructor(path: string) {
    super(path)
  }

  async list(): Promise<DapilModel[]> {
    try {
      const api = await this.api.get<DapilModel[]>(`${this.path}/dapil/list`)

      if (api.status === "error")
        throw new Error(api.message || "Failed to get dapil list data")

      return api.data
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Failed to get dapil list data"
      )
    }
  }

  async get(id: string): Promise<T[]> {
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
}
