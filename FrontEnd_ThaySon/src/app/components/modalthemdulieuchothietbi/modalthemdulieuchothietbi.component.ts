import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Themdulieudata } from 'src/app/modelorg/themdulieudata';
import { ThemdulieuthietbiService } from './service/themdulieuthietbi.service';

@Component({
  selector: 'app-modalthemdulieuchothietbi',
  templateUrl: './modalthemdulieuchothietbi.component.html',
  styleUrls: ['./modalthemdulieuchothietbi.component.css']
})
export class ModalthemdulieuchothietbiComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalthemdulieuchothietbiComponent>, private ser: ThemdulieuthietbiService) { }
  dataAdd: Themdulieudata = new Themdulieudata();
  ngOnInit(): void {
  }
  onKeyNhietDo(event: any) {
    this.dataAdd.nhietdo = event.target.value
  }
  onKeyDoAm(event: any) {
    this.dataAdd.doam = event.target.value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themData() {
    this.dataAdd.deviceaddress = localStorage.getItem('addressdevice')!
    this.ser.addDuLieuThietBi(this.dataAdd).subscribe({
      next: res => {
        alert("Thêm dữ liệu thành công")
        this.onNoClick()
      },
      error: err => {
        alert("Thêm dữ liệu thất bại")
      }
    })
  }
}
