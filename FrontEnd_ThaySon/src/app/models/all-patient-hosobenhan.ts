import { ThuocInHosobenhan } from "./thuoc-in-hosobenhan";

export class AllPatientHosobenhan {
    id!: number;
    tenbacsi!: string;
    idbacsi!: number;
    ngaykham!: string;
    ngaytaikham!: string;
    giatienkhambenh!: string;
    dathanhtoan!: string;
    chuandoan!: string;
    tongcongtienthuoc!: string;
    giatienphaitra!: string;
    status!: boolean;
    tenbenhnhan!: string;
    sdtbenhnhan!: string;
    buoi!: string;
    thuocInHoSoBenhAnDTOList!: ThuocInHosobenhan[];
}
