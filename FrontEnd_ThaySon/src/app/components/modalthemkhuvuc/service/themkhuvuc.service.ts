import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Themkhuvuc } from 'src/app/modelorg/themkhuvuc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemkhuvucService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  themVuMua(data: Themkhuvuc, id: number): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });

    return this.httpClient.post<any>(this.APIEndPoint + "/api/addarea?farmid=" + id, data, {
      headers: yourHeader,
    });
  }
}
