import { AllPatientHosobenhan } from "./all-patient-hosobenhan";
import { AllPatientLichhen } from "./all-patient-lichhen";

export class AllAboutPatient {
    id!: number;
    fullname!: string;
    email!: string;
    ngaysinh!: string;
    gioitinh!: string;
    sdt!: string;
    cmnd!: string;
    status!: boolean;
    imageurl!: string;
    diachi!: string;
    hoSoBenhAnDTOList!: AllPatientHosobenhan[];
    lichDatHenPatientDTOS!: AllPatientLichhen[];
}
