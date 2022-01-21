import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DanhsachService {
  readonly APIEndPoint = environment.apiUrlOrg;

  constructor(private httpClient: HttpClient) { }
  getDanhSachNongTrai() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/api/farmcuatochuc", null, {
      headers: yourHeader,
    });
  }
}