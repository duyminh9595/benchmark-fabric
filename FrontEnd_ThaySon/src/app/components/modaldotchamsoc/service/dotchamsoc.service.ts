import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Themdotchamsoc } from 'src/app/modelorg/themdotchamsoc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DotchamsocService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  addDotChamSoc(data: Themdotchamsoc) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    const url = this.APIEndPoint + "/api/createcaring";
    console.log(url)
    return this.httpClient.post<any>(url, data, {
      headers: yourHeader
    }).pipe();
  }
}
