import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from '../model/facility-model/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  BaseUrl: string = 'https://qualifood-drdhe0gdcaafdkhz.westus2-01.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  // Método para obtener los grupos según el `accountId`
  getGroupsByAccount(accountId: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.BaseUrl}/account/${accountId}/groups`, {
      headers: { 'Accept': 'application/json' }
    });
  }

  createGroup(groupData: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/group/create-group`, groupData, {
      headers: { 'Accept': 'application/json' }
    });
  }

  registerContainer(groupId: number, data: any) {
    return this.http.post<any>(`${this.BaseUrl}/container`, data);
  }

  registerWorker(groupId: number, workerData: any): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}/group/${groupId}/register-user`, workerData);
  }

}
