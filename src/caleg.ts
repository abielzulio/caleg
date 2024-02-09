import { DPD } from "./dpd"
import { DPR } from "./dpr"

export class Caleg {
  public dpd: DPD
  public dpr: DPR

  constructor() {
    this.dpd = new DPD()
    this.dpr = new DPR()
  }
}
