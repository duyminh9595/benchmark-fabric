import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThietbicuakhuvucService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  getThietBiCuaKhuVuc(id: string) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getalldeviceofaddressarea?areaaddress=" + id;
    console.log(url)
    return this.httpClient.get<any>(url, {
      headers: yourHeader
    }).pipe();
  }
}
