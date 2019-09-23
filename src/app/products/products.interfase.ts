export interface Shiny {
    id: number
    id_section: number
    version: string
    url: string
    tire_brand: string
    article: string
    tire_name_new: string
    tire_load: string
    tire_speed: string
    tire_time: string
    tire_ts: string
    tire_width: string
    tire_rf: string
    tire_thorn: string
    tire_param: string
    tire_price: number
    tire_price1: number
    tire_kol: number
    tire_photo: string
}

export interface Disk {
    id: number
    id_section: number
    version: string
    url: string
    disk_brand: string
    article: string
    disk_name: string
    disk_width: string
    disk_diam: string
    disk_sver: string
    disk_vilet: string
    disk_color: string
    disk_type: string
    disk_price: number
    disk_price1: number
    disk_kol: number
    disk_img: string
}

export interface Battery {
    id: number
    id_section: number
    version: string
    url: string
    a_1c: string
    a_brand: string
    a_name: string
    a_kol: number
    a_length: string
    a_width: string
    a_height: string
    a_em: string
    a_tok: string
    a_pol: string
    a_nap: string
    a_gar: string
    a_proiz: string
    a_price: number
    a_price1: number
    a_img: string
}
  
export interface Maslo {
    id: number
    id_section: number
    version: string
    url: string
    m_1c: string
    m_brand: string
    m_name: string
    m_type: string
    m_ob: string
    m_vz1: string
    m_vz2: string
    m_kol: number
    m_dvig: string
    m_price: number
    m_price1: number
    m_img: string
}

export interface Products {
    total_shiny: number
    total_disk: number
    total_battery: number
    total_oil: number
    shiny: Shiny[]
    disk: Disk[]
    battery: Battery[]
    oil: Maslo[]
}

export const emptyProduct = () => ({
    total_shiny: 0,
    total_disk: 0,
    total_battery: 0,
    total_oil: 0,
    shiny: [],
    disk: [],
    battery: [],
    oil: [],
});