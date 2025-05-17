import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'https://qualifood-drdhe0gdcaafdkhz.westus2-01.azurewebsites.net/api/v1/account';

  constructor( private http: HttpClient) {}



  getGroups(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/groups`);
  }


  getContainers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/containers`);
  }
  getUsers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/users`);
  }

}
