import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { AccountUsage } from '../model/subscription/subscription.entity';
import {finalize} from "rxjs/operators";
import {Notifications} from "../model/notifications/notification.entity";
import {TranslateService} from "@ngx-translate/core";
import {User} from "../../account/model/user/user.entity";
import {Account} from "../model/account/account.entity";




@Injectable({
	providedIn: 'root'
})
export class SettingServiceService {
	DevBaseurl: string = 'https://qualifood-drdhe0gdcaafdkhz.westus2-01.azurewebsites.net/api/v1';

	private loadingSource = new BehaviorSubject<boolean>(false);
	loading$ = this.loadingSource.asObservable();

	constructor(private http: HttpClient, private translateService: TranslateService) {

		this.translateService.setDefaultLang('en');
	}

	private setLoading(loading: boolean) {
		this.loadingSource.next(loading);
	}


	getProfileById(profileId: number): Observable<any> {
		this.setLoading(true);
		return this.http.get<any>(`${this.DevBaseurl}/profile/${profileId}`).pipe(
			finalize(() => this.setLoading(false))
		);
	}

	getUserById(userId: number): Observable<User> {
		this.setLoading(true);
		return this.http.get<User>(`${this.DevBaseurl}/user/${userId}`).pipe(
			finalize(() => this.setLoading(false))
		);
	}

	getAccountById(accountId: number): Observable<Account> {
		this.setLoading(true);
		return this.http.get<Account>(`${this.DevBaseurl}/account/${accountId}`).pipe(
			finalize(() => this.setLoading(false))
		);
	}

	getNotificationsByAccount(accountId: number) : Observable<any> {
		this.setLoading(true);
		return this.http.get<any>(`${this.DevBaseurl}/notification/account/${accountId}?priority=1&limit=20`).pipe(
			finalize(() => this.setLoading(false))
		);
	}

	getNotificationsByGroup(groupId: number) : Observable<any> {
		this.setLoading(true);
		return this.http.get<any>(`${this.DevBaseurl}/notification/group/${groupId}?priority=1&limit=20`).pipe(
			finalize(() => this.setLoading(false))
		);

	}

	changePassword(userId: number, body: any): Observable<any> {
		this.setLoading(true);
		return this.http.put<any>(`${this.DevBaseurl}/user/change-password`,  body ).pipe(
			finalize(() => this.setLoading(false))
		);

	}

	getNotificationTitle(notification: Notifications): string {
		switch (notification.alertType) {
			case 1:
				return this.translateService.instant("alerts.temperatureThresholdExceededTitle");
			case 2:
				return this.translateService.instant("alerts.humidityThresholdExceededTitle");
			case 3:
				return this.translateService.instant("alerts.decompositionGasesDetectedTitle");
			case 4:
				return this.translateService.instant("alerts.containerLinkedTitle");
			case 5:
				return this.translateService.instant("alerts.containerUnlinkedTitle");
			case 6:
				return this.translateService.instant("alerts.containerOffTitle");
			case 7:
				return this.translateService.instant("alerts.containerOnTitle");
			case 8:
				return this.translateService.instant("alerts.templateAssignedTitle");
			case 9:
				return this.translateService.instant("alerts.containerActivatedTitle");
			case 10:
				return this.translateService.instant("alerts.containerDeactivatedTitle");
			case 11:
				return this.translateService.instant("alerts.temperatureRegulationTriggeredTitle");
			case 12:
				return this.translateService.instant("alerts.temperatureRegulationSuccessfulTitle");
			case 13:
				return this.translateService.instant("alerts.temperatureRegulationFailedTitle");
			case 14:
				return this.translateService.instant("alerts.humidityRegulationTriggeredTitle");
			case 15:
				return this.translateService.instant("alerts.humidityRegulationSuccessfulTitle");
			case 16:
				return this.translateService.instant("alerts.humidityRegulationFailedTitle");
			case 17:
				return this.translateService.instant("alerts.ventilationRegulationTriggeredTitle");
			case 18:
				return this.translateService.instant("alerts.ventilationRegulationSuccessfulTitle");
			case 19:
				return this.translateService.instant("alerts.ventilationRegulationFailedTitle");
			case 20:
				return this.translateService.instant("alerts.containerHealthReportTitle");
			case 21:
				return this.translateService.instant("alerts.containerStatusReportTitle");
			case 22:
				return this.translateService.instant("alerts.containerManualOnTitle");
			case 23:
				return this.translateService.instant("alerts.containerManualOffTitle");
			case 24:
				return this.translateService.instant("alerts.containerOpenedTitle");
			case 25:
				return this.translateService.instant("alerts.containerOnlineTitle");
			case 26:
				return this.translateService.instant("alerts.containerOfflineTitle");
			default:
				return this.translateService.instant("alerts.unknownAlertTitle");
		}
	}

	getNotificationInfo(notification: Notifications, name: string): string {
		switch (notification.alertType) {
			case 1:
				return this.translateService.instant("alerts.temperatureThresholdExceeded", { name });
			case 2:
				return this.translateService.instant("alerts.humidityThresholdExceeded", { name });
			case 3:
				return this.translateService.instant("alerts.decompositionGasesDetected", { name });
			case 4:
				return this.translateService.instant("alerts.containerLinked", { name });
			case 5:
				return this.translateService.instant("alerts.containerUnlinked", { name });
			case 6:
				return this.translateService.instant("alerts.containerOff", { name });
			case 7:
				return this.translateService.instant("alerts.containerOn", { name });
			case 8:
				return this.translateService.instant("alerts.templateAssigned", { name });
			case 9:
				return this.translateService.instant("alerts.containerActivated", { name });
			case 10:
				return this.translateService.instant("alerts.containerDeactivated", { name });
			case 11:
				return this.translateService.instant("alerts.temperatureRegulationTriggered", { name });
			case 12:
				return this.translateService.instant("alerts.temperatureRegulationSuccessful", { name });
			case 13:
				return this.translateService.instant("alerts.temperatureRegulationFailed", { name });
			case 14:
				return this.translateService.instant("alerts.humidityRegulationTriggered", { name });
			case 15:
				return this.translateService.instant("alerts.humidityRegulationSuccessful", { name });
			case 16:
				return this.translateService.instant("alerts.humidityRegulationFailed", { name });
			case 17:
				return this.translateService.instant("alerts.ventilationRegulationTriggered", { name });
			case 18:
				return this.translateService.instant("alerts.ventilationRegulationSuccessful", { name });
			case 19:
				return this.translateService.instant("alerts.ventilationRegulationFailed", { name });
			case 20:
				return this.translateService.instant("alerts.containerHealthReport", { name });
			case 21:
				return this.translateService.instant("alerts.containerStatusReport", { name });
			case 22:
				return this.translateService.instant("alerts.containerManualOn", { name });
			case 23:
				return this.translateService.instant("alerts.containerManualOff", { name });
			case 24:
				return this.translateService.instant("alerts.containerOpened", { name });
			case 25:
				return this.translateService.instant("alerts.containerOnline", { name });
			case 26:
				return this.translateService.instant("alerts.containerOffline", { name });
			default:
				return this.translateService.instant("alerts.unknownAlert", { name });
		}
	}



	getAccountUsage(): Observable<AccountUsage> {
		// return this.http.get<any>(`${this.Baseurl}/account-usage-report`);
		//
		return new Observable<AccountUsage>(observer => {
			setTimeout(() => {
				observer.next({
					currentPlan: 'Advance',
					lowerPlan: 'Free',
					upperPlan: 'Enterprise',
					users: {
						currentUsage: 7,
						currentPlanLimit: 10,
						lowerPlanLimit: 5,
						upperPlanLimit: 15
					},
					containers: {
						currentUsage: 12,
						currentPlanLimit: 25,
						lowerPlanLimit: 10,
						upperPlanLimit: 100
					},
					facilities: {
						currentUsage: 4,
						currentPlanLimit: 5,
						lowerPlanLimit: 2,
						upperPlanLimit: 20
					}
				});
				observer.complete();
			}, 1000);
		});

	}

}


