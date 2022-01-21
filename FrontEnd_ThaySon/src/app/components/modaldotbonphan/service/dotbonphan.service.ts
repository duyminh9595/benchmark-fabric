import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Themdotbonphan } from 'src/app/modelorg/themdotbonphan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DotbonphanService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  addDotBonPhan(data: Themdotbonphan) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/createfertilizing";
    console.log(url)
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
