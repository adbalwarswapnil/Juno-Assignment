import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllData():Observable<Data[]>{
    return this.http.get<Data[]>('../../assets/data.json')
  }
}

export interface Data {
  userName: string
  userEmail: string
  riskLevel: string
  actionReason: string
  timeToClose: string
  date: string
  actionName: string
  actionEmail: string
}