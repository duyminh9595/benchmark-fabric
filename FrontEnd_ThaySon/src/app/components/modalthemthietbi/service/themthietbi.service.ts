import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datathemthietbi } from 'src/app/modelorg/datathemthietbi';
import { Datathemvumua } from 'src/app/modelorg/datathemvumua';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemthietbiService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  themThietBi(data: Datathemthietbi, id: string): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/api/addevice", data, {
      headers: yourHeader,
    });
  }
}
