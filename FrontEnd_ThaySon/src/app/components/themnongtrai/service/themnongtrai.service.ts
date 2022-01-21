import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nongtrai } from 'src/app/modelorg/nongtrai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemnongtraiService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  doAddNongTrai(data: Nongtrai): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    console.log(data);
    return this.httpClient.post<any>(this.APIEndPoint + "/api/addfarm", data, {
      headers: yourHeader,
    });
  }
}
