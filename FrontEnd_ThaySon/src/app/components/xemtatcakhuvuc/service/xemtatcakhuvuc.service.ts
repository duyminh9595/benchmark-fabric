import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class XemtatcakhuvucService {
  readonly APIEndPoint = environment.apiUrlOrg;

  constructor(private httpClient: HttpClient) { }
  getDanhSachKhuVuc() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/api/seeallareabaseonnode", {
      headers: yourHeader,
    });
  }
}
