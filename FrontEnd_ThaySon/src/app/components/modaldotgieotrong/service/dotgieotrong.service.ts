import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Themdotgieotrong } from 'src/app/modelorg/themdotgieotrong';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DotgieotrongService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  addDotGieoTrong(data: Themdotgieotrong) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/createplanting";
    console.log(url)
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
