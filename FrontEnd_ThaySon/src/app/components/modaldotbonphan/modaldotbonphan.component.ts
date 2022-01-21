import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Dotbonphan } from 'src/app/modelorg/dotbonphan';
import { Themdotbonphan } from 'src/app/modelorg/themdotbonphan';
import { DotbonphanService } from './service/dotbonphan.service';

@Component({
  selector: 'app-modaldotbonphan',
  templateUrl: './modaldotbonphan.component.html',
  styleUrls: ['./modaldotbonphan.component.css']
})
export class ModaldotbonphanComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModaldotbonphanComponent>, private ser: DotbonphanService) {
    this.dataAdd.plantingseason = localStorage.getItem('idvumua')!
  }
  dataAdd: Themdotbonphan = new Themdotbonphan();

  ngOnInit(): void {
  }
  onKeyMoTa(event: any) {
    this.dataAdd.description = event.target.value;
  }
  onKeyLoaiPhanBon(event: any) {
    this.dataAdd.fertilizerType = event.target.value
  }
  onNoClick() {
    this.dialogRef.close();
  }
  themDotBonPhan() {
    this.ser.addDotBonPhan(this.dataAdd).subscribe({
      next: res => {
        alert("Thêm đợt bón phân thành công")
        this.onNoClick()
      },
      error: err => {
        alert("Thêm đợt bón phân thất bại")
      }
    })
  }
}
