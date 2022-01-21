import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spoutputaddress } from 'src/app/modelorg/spoutputaddress';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChitietspoutputService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  seeBonPhanBaseonSPOUTPUT(data: Spoutputaddress) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/seebonphancuasanphamoutput";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
  seeChamSocnBaseonSPOUTPUT(data: Spoutputaddress) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/seedotchamsocsanphamoutput";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
  seeVuMuaBaseonSPOUTPUT(data: Spoutputaddress) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/seeinfovumuacuasanpham";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
