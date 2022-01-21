import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Themkhuvuc } from 'src/app/modelorg/themkhuvuc';
import { ThemvumuaService } from '../modalthemvumua/themvumua.service';
import { ThemkhuvucService } from './service/themkhuvuc.service';

@Component({
  selector: 'app-modalthemkhuvuc',
  templateUrl: './modalthemkhuvuc.component.html',
  styleUrls: ['./modalthemkhuvuc.component.css']
})
export class ModalthemkhuvucComponent implements OnInit {
  id!: number
  constructor(public dialogRef: MatDialogRef<ModalthemkhuvucComponent>, @Inject(MAT_DIALOG_DATA) data: number, private ser: ThemkhuvucService) {
    this.id = data
  }
  dataAdd: Themkhuvuc = new Themkhuvuc();
  ngOnInit(): void {
  }
  onKeyKhuVuc(event: any) {
    this.dataAdd.name = event.target.value;
  }
  onKeyMoTa(event: any) {
    this.dataAdd.description = event.target.value;
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themvumua() {
    this.ser.themVuMua(this.dataAdd, this.id).subscribe({
      next: res => {
        alert("Thêm khu vực cho nông trại thành công")
        this.onNoClick();
      },
      error: err => {
        alert("Thêm khu vực thất bại")
      }
    })
  }
}
