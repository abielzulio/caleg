import { Calon } from "./model"

type DPR = {
  namaPartai: string
  logoPartai: string
  statusPublikasi: string
  tempatLahir: string
  usia: number
  agama: string
  statusHukum: string
  pekerjaan: string
  programUsulan: string[]
}

export type CalonDPR = Calon<DPR>
