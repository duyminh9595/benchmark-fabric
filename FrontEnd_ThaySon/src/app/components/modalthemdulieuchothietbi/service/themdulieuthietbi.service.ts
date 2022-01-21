import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Themdulieudata } from 'src/app/modelorg/themdulieudata';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemdulieuthietbiService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  addDuLieuThietBi(data: Themdulieudata) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/adddatatodevice";
    console.log(url)
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
