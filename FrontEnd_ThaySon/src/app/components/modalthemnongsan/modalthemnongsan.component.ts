import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Themnongsan } from 'src/app/modelorg/themnongsan';
import { ThemnongsanService } from './service/themnongsan.service';

@Component({
  selector: 'app-modalthemnongsan',
  templateUrl: './modalthemnongsan.component.html',
  styleUrls: ['./modalthemnongsan.component.css']
})
export class ModalthemnongsanComponent implements OnInit {
  id!: number;
  constructor(public dialogRef: MatDialogRef<ModalthemnongsanComponent>, @Inject(MAT_DIALOG_DATA) data: number, private ser: ThemnongsanService) {
    this.id = data;
  }
  dataAdd: Themnongsan = new Themnongsan();
  onKeyTen(event: any) {
    this.dataAdd.name = event.target.value
  }
  ngOnInit(): void {
  }
  onKeyMoTa(event: any) {
    this.dataAdd.description = event.target.value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themvumua() {
    this.ser.themNongSan(this.dataAdd, this.id).subscribe({
      next: res => {
        alert("Thêm nông sản cho nông trại thành công")
        this.onNoClick();
      },
      error: err => {
        alert("Thêm nông sản thất bại")
      }
    })
  }
}
