import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDashboard } from 'src/app/models/admin-dashboard';
import { Bacsidungthuoctrongthang } from 'src/app/models/bacsidungthuoctrongthang';
import { Hosobenhantrongngay } from 'src/app/models/hosobenhantrongngay';
import { Thuoctrongthang } from 'src/app/models/thuoctrongthang';
import { DashboardService } from './service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardtop: AdminDashboard = new AdminDashboard();
  dashboardright: Bacsidungthuoctrongthang[] = [];
  dashboardleft: Thuoctrongthang[] = [];
  dashboardbot: Hosobenhantrongngay[] = [];
  constructor(private ser: DashboardService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ser.gettopdashboard().subscribe({
      next: res => {
        this.dashboardtop = res;
        this.ser.gettopbacsidungthuoctrongthuoc().subscribe({
          next: res => {
            this.dashboardright = res;
            this.ser.getthuoctrongthang().subscribe({
              next: res => {
                this.dashboardleft = res
                this.ser.gethosobenhantrongngay().subscribe({
                  next: res => {
                    this.dashboardbot = res
                  }
                })
              }
            })
          }
        })
      }
    })
  }
}
