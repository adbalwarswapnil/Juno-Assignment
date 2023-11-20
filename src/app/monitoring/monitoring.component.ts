import { Component, OnInit } from '@angular/core';
import { ApiService, Data } from '../service/api.service';


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  constructor(private api:ApiService) { }
  monitoringData!:Data[];
  ngOnInit(): void {
    this.api.getAllData().subscribe((data:Data[])=>{
      this.monitoringData=data
      
    })
  }

}
