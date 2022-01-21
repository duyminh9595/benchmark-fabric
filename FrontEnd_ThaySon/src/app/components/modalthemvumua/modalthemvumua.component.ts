import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Datainjectthemvumua } from 'src/app/modelorg/datainjectthemvumua';
import { Datathemvumua } from 'src/app/modelorg/datathemvumua';
import { ThemvumuaService } from './themvumua.service';

@Component({
  selector: 'app-modalthemvumua',
  templateUrl: './modalthemvumua.component.html',
  styleUrls: ['./modalthemvumua.component.css']
})
export class ModalthemvumuaComponent implements OnInit {
  dataInJectThemVuMua: Datainjectthemvumua = new Datainjectthemvumua();
  constructor(public dialogRef: MatDialogRef<ModalthemvumuaComponent>, @Inject(MAT_DIALOG_DATA) data: Datainjectthemvumua, private ser: ThemvumuaService) {
    this.dataInJectThemVuMua = data;
    this.id = data.farmid
  }
  id!: string;
  error: boolean = false;
  dataThemVuaMua: Datathemvumua = new Datathemvumua();
  ngOnInit(): void {
  }
  onKeyNameVuMua(value: any) {
    this.dataThemVuaMua.name = value.target.value
  }
  changeKhuVuc(value: any) {
    this.dataThemVuaMua.addressarea = value;
  }
  changeNongSan(value: any) {
    this.dataThemVuaMua.addressproduct = value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themvumua() {
    this.ser.themVuMua(this.dataThemVuaMua, this.id).subscribe({
      next: res => {
        alert("Thêm vụ mùa thành công")
        this.onNoClick();
      },
      error: err => {
        alert("Thất bại")
      }
    })
  }
}
