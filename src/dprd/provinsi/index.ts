import { Client } from "../../client"
import { CalonDPRD } from "../../types/dprd"

export class DPRPDrovinsi extends Client<CalonDPRD.Provinsi> {
  constructor() {
    super("dprd-provinsi")
  }
}
