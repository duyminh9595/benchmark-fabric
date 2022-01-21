import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminLogin } from 'src/app/models/admin-login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly APIEndPoint = environment.apiUrlOrg;
  constructor(private httpClient: HttpClient) { }
  doLoginAdmin(data: AdminLogin) {
    return this.httpClient.post<any>(this.APIEndPoint + "/login", data);
  }
}
