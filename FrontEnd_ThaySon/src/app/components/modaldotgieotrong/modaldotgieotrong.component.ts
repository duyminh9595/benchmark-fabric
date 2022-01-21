import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Themdotgieotrong } from 'src/app/modelorg/themdotgieotrong';
import { Vumua } from 'src/app/modelorg/vumua';
import { DotgieotrongService } from './service/dotgieotrong.service';

@Component({
  selector: 'app-modaldotgieotrong',
  templateUrl: './modaldotgieotrong.component.html',
  styleUrls: ['./modaldotgieotrong.component.css']
})
export class ModaldotgieotrongComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModaldotgieotrongComponent>, private ser: DotgieotrongService) {
    this.dataAdd.plantingseason = localStorage.getItem('idvumua')!
  }
  dataAdd: Themdotgieotrong = new Themdotgieotrong();
  ngOnInit(): void {
  }
  onKeyMoTa(event: any) {
    this.dataAdd.description = event.target.value
  }
  onKeyNguonGoc(event: any) {
    this.dataAdd.source = event.target.value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themDotGieoTrong() {
    this.ser.addDotGieoTrong(this.dataAdd).subscribe({
      next: res => {
        alert("Thêm đợt gieo trồng thành công")
        this.onNoClick()
      },
      error: err => {
        alert("Thêm đợt gieo trồng thất bại")
      }
    })
  }
}
