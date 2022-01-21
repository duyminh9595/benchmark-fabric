import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Datainjectthemthietbi } from 'src/app/modelorg/datainjectthemthietbi';
import { Datathemthietbi } from 'src/app/modelorg/datathemthietbi';
import { ThemthietbiService } from './service/themthietbi.service';

@Component({
  selector: 'app-modalthemthietbi',
  templateUrl: './modalthemthietbi.component.html',
  styleUrls: ['./modalthemthietbi.component.css']
})
export class ModalthemthietbiComponent implements OnInit {
  dataInject: Datainjectthemthietbi = new Datainjectthemthietbi();
  constructor(public dialogRef: MatDialogRef<ModalthemthietbiComponent>, @Inject(MAT_DIALOG_DATA) data: Datainjectthemthietbi, private ser: ThemthietbiService) {
    this.dataInject = data;
    console.log(this.dataInject)
  }
  dataAdd: Datathemthietbi = new Datathemthietbi();
  ngOnInit(): void {
  }
  onKeyNameThietBi(event: any) {
    this.dataAdd.name = event.target.value
  }
  onKeyMoTa(event: any) {
    this.dataAdd.description = event.target.value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themThietBi() {
    this.dataAdd.addressfarm = this.dataInject.farmid
    console.log(this.dataAdd)
    this.ser.themThietBi(this.dataAdd, this.dataInject.farmid).subscribe({
      next: res => {
        alert("Thêm thiết bị thành công")
        this.onNoClick();
      },
      error: err => {
        alert("Thất bại")
      }
    })
  }
  changeKhuVuc(value: any) {
    this.dataAdd.addressarea = value;
  }
}
