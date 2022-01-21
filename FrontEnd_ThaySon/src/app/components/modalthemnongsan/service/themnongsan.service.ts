import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Themnongsan } from 'src/app/modelorg/themnongsan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemnongsanService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  themNongSan(data: Themnongsan, id: number): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });

    return this.httpClient.post<any>(this.APIEndPoint + "/api/addnongsan?farmid=" + id, data, {
      headers: yourHeader,
    });
  }
}
