import { DPD } from "./dpd"
import { DPR } from "./dpr"
import { DPRD } from "./dprd"

export class Caleg {
  public dpd: DPD
  public dpr: DPR
  public dprd: DPRD

  constructor() {
    this.dpd = new DPD()
    this.dpr = new DPR()
    this.dprd = new DPRD()
  }
}
