import { Client } from "../../client"
import { CalonDPRD } from "../../types/dprd"

export class DPRDKabKot extends Client<CalonDPRD.Kabupaten> {
  constructor() {
    super("dprd-kabupaten-kota")
  }
}
