import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Themdotthuhoach } from 'src/app/modelorg/themdotthuhoach';
import { DotthuhoachService } from './service/dotthuhoach.service';

@Component({
  selector: 'app-modaldotthuhoach',
  templateUrl: './modaldotthuhoach.component.html',
  styleUrls: ['./modaldotthuhoach.component.css']
})
export class ModaldotthuhoachComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModaldotthuhoachComponent>, private ser: DotthuhoachService) {
    this.dataAdd.plantingseason = localStorage.getItem('idvumua')!
  }
  dataAdd: Themdotthuhoach = new Themdotthuhoach();

  ngOnInit(): void {
  }
  onKeySoLuong(event: any) {
    this.dataAdd.quantity = event.target.value
  }
  onKeyKetQua(event: any) {
    this.dataAdd.kq = event.target.value
  }
  onKeyMoTa(event: any) {
    this.dataAdd.description = event.target.value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themDotThuHoach() {
    this.ser.addDotThuHoach(this.dataAdd).subscribe({
      next: res => {
        alert("Thêm đợt thu hoạch thành công")
        this.onNoClick()
      },
      error: err => {
        alert("Thêm đợt thu hoạch thất bại")
      }
    })
  }
}
