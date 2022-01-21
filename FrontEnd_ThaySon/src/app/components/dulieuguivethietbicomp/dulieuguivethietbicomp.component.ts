import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Danhsachthietbi } from 'src/app/modelorg/danhsachthietbi';
import { Datathietbi } from 'src/app/modelorg/datathietbi';
import { Dulieutrongthietbi } from 'src/app/modelorg/dulieutrongthietbi';
import { DulieuguivethietbiService } from '../dulieuguivethietbi/service/dulieuguivethietbi.service';
import { ModalthemdulieuchothietbiComponent } from '../modalthemdulieuchothietbi/modalthemdulieuchothietbi.component';

@Component({
  selector: 'app-dulieuguivethietbicomp',
  templateUrl: './dulieuguivethietbicomp.component.html',
  styleUrls: ['./dulieuguivethietbicomp.component.css']
})
export class DulieuguivethietbicompComponent implements OnInit {
  data: Danhsachthietbi = new Danhsachthietbi();
  constructor(private activeRoute: ActivatedRoute, private router: Router, private ser: DulieuguivethietbiService, public dialog: MatDialog) {
    this.data.Key = localStorage.getItem('addressdevice')!
    this.data.Record = new Datathietbi();
    this.data.Record.name = localStorage.getItem('namedevice')!
    this.data.Record.description = localStorage.getItem('descriptiondevice')!
    this.data.Record.addressfarm = localStorage.getItem('addressfarmdevice')!
    this.data.Record.location = localStorage.getItem('addresslocationdevice')!
  }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(() => this.duLieuGuiVeThietBi());
  }
  id!: string;
  dulieutrongthietbi: Dulieutrongthietbi[] = [];
  duLieuGuiVeThietBi() {
    let checkidthietbi = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidthietbi) {
      let idthietbi = this.activeRoute.snapshot.paramMap.get('id')!;
      this.id = idthietbi
      this.ser.getDuLieuThemVaoThietBi().subscribe({
        next: res => {
          this.dulieutrongthietbi = res.result
        }
      })
    }
    else {
      this.router.navigateByUrl('/danhsachthietbi')
    }
  }
  themDuLieuChoThietBi() {
    const dialogRef = this.dialog.open(ModalthemdulieuchothietbiComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dulieutrongthietbi = [];
      this.ser.getDuLieuThemVaoThietBi().subscribe({
        next: res => {
          this.dulieutrongthietbi = res.result
        }
      })
    });
  }

}
