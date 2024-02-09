import { Client } from "../client"
import { CalonDPD } from "../types/dpd"

export class DPD extends Client<CalonDPD> {
  constructor() {
    super("dpd")
  }
}
