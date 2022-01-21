import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addressplantingseason } from 'src/app/modelorg/addressplantingseason';
import { Addressproduct } from 'src/app/modelorg/addressproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChitietvumuaService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  themDotGieoTrong() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getallplantingseasonofnode";
    return this.httpClient.get<any>(url, {
      headers: yourHeader
    }).pipe();
  }
  getThongTInNongSan(data: Addressproduct) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getthongtinnongsan";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
  getThongTinDotGieoTrong(data: Addressplantingseason) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getallplantingofnodeandplantingseason";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
  getThongTinDotBonPhan(data: Addressplantingseason) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getallfertilizingofnodeandplantingseason";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
  getThongTinDotChamSoc(data: Addressplantingseason) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getallcaringofnodeandplantingseason";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
  getThongTinDotThuHoach(data: Addressplantingseason) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/getallharvestingofnodeandplantingseason";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
