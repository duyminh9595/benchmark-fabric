import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Harvestingaddress } from 'src/app/modelorg/harvestingaddress';
import { Spoutputaddress } from 'src/app/modelorg/spoutputaddress';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatainthuhoachService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  seeSPOUTPUTBaseonThuHoach(data: Spoutputaddress) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/seeallsanphamoutputbyharvestingaddress";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
  thuhoachsanpham(data: Harvestingaddress) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/addsanphamoutput";
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
