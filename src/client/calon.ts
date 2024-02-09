import { Base } from "./utils"

export class Calon<T> extends Base {
  constructor(path: string) {
    super(path)
  }

  async get(id: string): Promise<T | undefined> {
    try {
      const api = await this.api.get<T[]>(`${this.path}/calon/${id}`)

      if (api.data.length === 1) return api.data[0]

      throw new Error(api.message || "Failed to get calon data")
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Failed to get calon data"
      )
    }
  }
}
