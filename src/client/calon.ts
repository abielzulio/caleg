import { Base } from "./utils"

export class Calon<T> extends Base {
  constructor(path: string) {
    super(path)
  }

  async get(id: string): Promise<T> {
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
