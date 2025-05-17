import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, finalize } from 'rxjs/operators';
import { Template } from "../model/template-model/template.entity";
import { Container } from "../model/container-model/container.entity";

@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {

  DevBaseurl: string = 'https://qualifood-drdhe0gdcaafdkhz.westus2-01.azurewebsites.net/api/v1';

  // to manage the templates selection
  private templateSource = new BehaviorSubject<any>(null);
  templateSelected = this.templateSource.asObservable();

  // to manage loading state
  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  constructor(private http: HttpClient) { }

  private setLoading(loading: boolean) {
    this.loadingSource.next(loading);
  }

  getContainers(): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.DevBaseurl}/container`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getContainersByAccountId(accountId: number): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.DevBaseurl}/account/${accountId}/containers`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getContainersByGroupId(groupId: number): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.DevBaseurl}/group/${groupId}/containers`).pipe(
        finalize(() => this.setLoading(false))
    );
  }

  getTemplates(): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.DevBaseurl}/template`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getContainerbyId(containerID: any): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.DevBaseurl}/container/${containerID}`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  updateContainerParameters(containerId: number, parameters: any): Observable<any> {
    return this.http.put(`${this.DevBaseurl}/container/${containerId}/parameters`, parameters);
  }


  selectTemplate(template: Template) {
    this.templateSource.next(template);
  }

  assignTemplateToContainer(containerId: number, templateId: number) {
    this.setLoading(true);
    return this.http.post<any>(`${this.DevBaseurl}/container/${containerId}/assign/${templateId}`, {}).pipe(
      finalize(() => this.setLoading(false))
    );
  }
}
