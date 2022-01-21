import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datainjectthemvumua } from 'src/app/modelorg/datainjectthemvumua';
import { Datathemvumua } from 'src/app/modelorg/datathemvumua';
import { DisableMedicine } from 'src/app/models/disable-medicine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemvumuaService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  themVuMua(data: Datathemvumua, id: string): Observable<any> {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/api/createplantingseason?farmid=" + id, data, {
      headers: yourHeader,
    });
  }
}
