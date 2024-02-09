import { Client } from "../client"
import { CalonDPR } from "../types/dpr"

export class DPR extends Client<CalonDPR> {
  constructor() {
    super("dpr-ri")
  }
}
