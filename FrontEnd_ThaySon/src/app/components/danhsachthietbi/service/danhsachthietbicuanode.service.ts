import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DanhsachthietbicuanodeService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  getThietBiCuaToChuc() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getalldeviceofnode";
    console.log(url)
    return this.httpClient.get<any>(url, {
      headers: yourHeader
    }).pipe();
  }
}
