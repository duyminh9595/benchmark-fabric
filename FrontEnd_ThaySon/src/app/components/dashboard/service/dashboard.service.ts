import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  gettopdashboard() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/dashboard", {
      headers: yourHeader,
    }).pipe();
  }
  gettopbacsidungthuoctrongthuoc() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/bacsinhieunhattrongthang", {
      headers: yourHeader,
    }).pipe();
  }
  getthuoctrongthang() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/thuoctrongthang", {
      headers: yourHeader,
    }).pipe();
  }
  gethosobenhantrongngay() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenAdminLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/admin/core/cabenhtrongngay", {
      headers: yourHeader,
    }).pipe();
  }
}
