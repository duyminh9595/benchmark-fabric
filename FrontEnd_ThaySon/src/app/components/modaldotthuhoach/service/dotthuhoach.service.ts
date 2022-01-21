import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Themdotthuhoach } from 'src/app/modelorg/themdotthuhoach';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DotthuhoachService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  addDotThuHoach(data: Themdotthuhoach) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/createharvesting";
    console.log(url)
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
