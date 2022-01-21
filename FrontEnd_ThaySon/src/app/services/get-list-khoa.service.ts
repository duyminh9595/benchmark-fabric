import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Khoa } from '../models/khoa';

@Injectable({
  providedIn: 'root'
})
export class GetListKhoaService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDanhSachKhoa() {
    return this.httpClient.get<GetResponseKhoa>(this.APIEndPoint + "/khoa/danhsachkhoa");
  }
}
interface GetResponseKhoa {
  khoa: Khoa[];
}