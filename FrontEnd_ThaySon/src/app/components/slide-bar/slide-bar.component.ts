import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {
  appointmentshow: boolean = false;
  doctorshow: boolean = false;
  patientshow: boolean = false;
  paymentshow: boolean = false;
  medicineshow: boolean = false;
  localStore: Storage = localStorage;
  nameAdmin!: string;
  imageUrl!: string;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.nameAdmin = localStorage.getItem('emailLogin')!
    console.log(this.nameAdmin);
  }
  openshowMedicine() {
    this.medicineshow = !this.medicineshow;
  }
  mouseHover(e: any) {

  }
  mouseOut(e: any) {

  }
  openAppointment() {
    this.appointmentshow = !this.appointmentshow;
  }
  openshowdoctor() {
    this.doctorshow = !this.doctorshow;
  }
  openshowpatient() {
    this.patientshow = !this.patientshow;
  }
  openshowPayment() {
    this.paymentshow = !this.paymentshow;
  }
  gotohome() {
    this.router.navigateByUrl('/');
  }
  local: Storage = localStorage;
  signOutAdmin() {
    this.local.removeItem("emailLogin")
    this.local.removeItem("tokenLogin")
    window.location.href = '/';
  }
  showkhoabool: boolean = false;
  showKhoa() {
    this.showkhoabool = !this.showkhoabool;
  }
}
