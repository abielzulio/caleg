import { DPRDKabKot } from "./kabkot"
import { DPRPDrovinsi } from "./provinsi"

export class DPRD {
  public provinsi: DPRPDrovinsi
  public kabkot: DPRDKabKot

  constructor() {
    this.provinsi = new DPRPDrovinsi()
    this.kabkot = new DPRDKabKot()
  }
}
