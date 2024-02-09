import { APIClient } from "../api"
import { Client } from "../client"
import { DPDCalon, DPDDapil } from "../types/dpd"

export class DPD extends Client {
  constructor() {
    super()
  }

  async getDapilList(): Promise<DPDDapil[]> {
    try {
      const api = await this.api.get<DPDDapil[]>(`dpd/dapil/list`)

      if (api.status !== "success") throw new Error("An error occurred")

      return api.data
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An error occurred"
      )
    }
  }

  async getDapil(id: string): Promise<DPDCalon[]> {
    try {
      const api = await this.api.get<DPDCalon[]>(`dpd/dapil/${id}`)

      if (api.status !== "success") throw new Error("An error occurred")

      return api.data
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An error occurred"
      )
    }
  }

  async getCalon(id: string): Promise<DPDCalon> {
    try {
      const api = await this.api.get<DPDCalon>(`dpd/calon/${id}`)

      if (api.status !== "success") throw new Error("An error occurred")

      return api.data
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An error occurred"
      )
    }
  }
}
