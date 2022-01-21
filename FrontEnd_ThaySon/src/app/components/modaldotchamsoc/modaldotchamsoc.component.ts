import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Themdotchamsoc } from 'src/app/modelorg/themdotchamsoc';
import { DotchamsocService } from './service/dotchamsoc.service';

@Component({
  selector: 'app-modaldotchamsoc',
  templateUrl: './modaldotchamsoc.component.html',
  styleUrls: ['./modaldotchamsoc.component.css']
})
export class ModaldotchamsocComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModaldotchamsocComponent>, private ser: DotchamsocService) {
    this.dataAdd.plantingseason = localStorage.getItem('idvumua')!
  }
  dataAdd: Themdotchamsoc = new Themdotchamsoc();

  ngOnInit(): void {
  }
  onKeyMoTa(event: any) {
    this.dataAdd.description = event.target.value
  }
  onKeyPhuongPhap(event: any) {
    this.dataAdd.method = event.target.value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themDotChamSoc() {
    this.ser.addDotChamSoc(this.dataAdd).subscribe({
      next: res => {
        alert("Thêm đợt chăm sóc thành công")
        this.onNoClick()
      },
      error: err => {
        alert("Thêm đợt chăm sóc thất bại")
      }
    })
  }
}
