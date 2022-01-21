import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DulieuguivethietbiService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  getDuLieuThemVaoThietBi() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const deviceid = localStorage.getItem('addressdevice')!
    const url = this.APIEndPoint + "/api/getinfohassenttodevice?deviceaddress=" + deviceid;
    console.log(url)
    return this.httpClient.get<any>(url, {
      headers: yourHeader
    }).pipe();
  }
}
