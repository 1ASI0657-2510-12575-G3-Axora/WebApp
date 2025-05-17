import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService {

  Baseurl: string = 'https://qualifood-drdhe0gdcaafdkhz.westus2-01.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<any> {
    const accountId = localStorage.getItem('accountId');
    return this.http.get<any>(`${this.Baseurl}/account/${accountId}/users`);
  }

  getWorkerbyId(workerId: string): Observable<any> {
    const accountId = localStorage.getItem('accountId');
    return this.http.get<any>(`${this.Baseurl}/account/${accountId}/users/${workerId}`);
  }

  getWorkersByAccount(accountId: string) {
    return this.http.get<any[]>(`${this.Baseurl}/account/${accountId}/users`);
  }
  grantPrivilege(profileId: number, privilegeId: number): Observable<any> {
    const url = `${this.Baseurl}/profile/grant-privileges`;
    const body = { profileId, privilegeId };
    console.log('grantPrivilege', body);
    return this.http.post(url, body);

  }

  revokePrivilege(profileId: number, privilegeId: number): Observable<any> {
    const url = `${this.Baseurl}/profile/revoke-privileges`;
    const body = { profileId, privilegeId };
    console.log('revokePrivilege', body);
    return this.http.put(url, body);
  }

}
