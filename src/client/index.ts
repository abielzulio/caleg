import { Calon } from "./calon"
import { Dapil } from "./dapil"

export class Client<T> {
  public dapil: Dapil<T>
  public calon: Calon<T>

  constructor(path: string) {
    this.dapil = new Dapil<T>(path)
    this.calon = new Calon<T>(path)
  }
}
