import { Nullable } from "./utils"

export interface RiwayatPekerjaan {
  namaPerusahaanLembaga: string
  jabatan: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatPendidikan {
  jenjangPendidikan: string
  namaInstitusi: string
  tahunMasuk: string
  tahunKeluar: string
  nomorSertifikat?: string
}

export interface RiwayatKursusDiklat {
  namaKursus: string
  lembagaPenyelenggara: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatOrganisasi {
  namaOrganisasi: string
  jabatan: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatPenghargaan {
  namaPenghargaan: string
  lembaga: string
  tahun: string
}

export type Calon<T> = T & {
  url: string
  id: string
  dapilId: string
  namaDapil: string
  nomorUrut: number
  pasFoto: string
  nama: string
  jenisKelamin: string
  pilihanPublikasi: Nullable<string>
  tempatTinggal: Nullable<string>
  statusDisabilitas: Nullable<string>
  riwayatPekerjaan: Nullable<RiwayatPekerjaan[]>
  riwayatPendidikan: Nullable<RiwayatPendidikan[]>
  riwayatKursusDiklat: Nullable<RiwayatKursusDiklat[]>
  riwayatOrganisasi: Nullable<RiwayatOrganisasi[]>
  riwayatPenghargaan: Nullable<RiwayatPenghargaan[]>
  motivasi: Nullable<string[]>
}
