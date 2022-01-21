import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addressfarm } from 'src/app/modelorg/addressfarm';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChitietnongtraiService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  getChiTietNongTrai(id: string) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/farm?farmid=" + id;
    console.log(url)
    return this.httpClient.get<any>(url).pipe();
  }
  getDanhSachKhuVucCuaNongTrai(id: string) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/seearea?farmid=" + id;
    return this.httpClient.get<any>(url).pipe();
  }
  getDanhSachNongSancCuaNongTrai(id: string) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/seeproduct?farmid=" + id;
    return this.httpClient.get<any>(url).pipe();
  }
  getDanhSachVuMuaCuaNongTrai(data: Addressfarm) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getallplantingseasonoffarmaddress";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader,
    }).pipe();
  }
  getDanhsachthietbi(id: string) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getalldeviceofaddressfarm?farmid=" + id;
    return this.httpClient.get<any>(url, {
      headers: yourHeader,
    }).pipe();
  }
}
