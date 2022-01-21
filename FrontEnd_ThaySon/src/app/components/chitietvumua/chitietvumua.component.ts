import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Addressplantingseason } from 'src/app/modelorg/addressplantingseason';
import { Addressproduct } from 'src/app/modelorg/addressproduct';
import { Chitietvumua } from 'src/app/modelorg/chitietvumua';
import { Danhsachdotbonphan } from 'src/app/modelorg/danhsachdotbonphan';
import { Danhsachdotchamsoc } from 'src/app/modelorg/danhsachdotchamsoc';
import { Danhsachdotgieotrong } from 'src/app/modelorg/danhsachdotgieotrong';
import { Danhsachdotthuhoach } from 'src/app/modelorg/danhsachdotthuhoach';
import { Danhsachvumua } from 'src/app/modelorg/danhsachvumua';
import { Dotthuhoach } from 'src/app/modelorg/dotthuhoach';
import { Thongtinproduct } from 'src/app/modelorg/thongtinproduct';
import { Vumua } from 'src/app/modelorg/vumua';
import { ModaldotbonphanComponent } from '../modaldotbonphan/modaldotbonphan.component';
import { ModaldotchamsocComponent } from '../modaldotchamsoc/modaldotchamsoc.component';
import { ModaldotgieotrongComponent } from '../modaldotgieotrong/modaldotgieotrong.component';
import { ModaldotthuhoachComponent } from '../modaldotthuhoach/modaldotthuhoach.component';
import { ChitietvumuaService } from './service/chitietvumua.service';

@Component({
  selector: 'app-chitietvumua',
  templateUrl: './chitietvumua.component.html',
  styleUrls: ['./chitietvumua.component.css']
})
export class ChitietvumuaComponent implements OnInit {
  data: Vumua = new Vumua();
  constructor(private ser: ChitietvumuaService, public dialog: MatDialog, private router: Router) {
    this.data.txId = localStorage.getItem('idvumua')!
    this.data.addressfarm = localStorage.getItem('idnongtrai')!
    this.data.addressarea = localStorage.getItem('idkhuvuc')!
    this.data.addressproduct = localStorage.getItem('idnongsan')!
    this.data.datecreated = localStorage.getItem('ngaytao')!
    this.addressproduct.addressproduct = this.data.addressproduct;
  }
  danhsachdotgieotrong: Danhsachdotgieotrong[] = [];
  addressproduct: Addressproduct = new Addressproduct();
  thongtinproduct: Thongtinproduct = new Thongtinproduct();

  danhsachdotbonphan: Danhsachdotbonphan[] = [];

  danhsachdotchamsoc: Danhsachdotchamsoc[] = [];

  danhsachdotthuhoach: Danhsachdotthuhoach[] = [];
  ngOnInit(): void {
    this.ser.getThongTInNongSan(this.addressproduct).subscribe({
      next: res => {
        this.thongtinproduct = res.result;
        let dataaddressplatingseason: Addressplantingseason = new Addressplantingseason();
        dataaddressplatingseason.plantingseasonid = this.data.txId
        this.ser.getThongTinDotGieoTrong(dataaddressplatingseason).subscribe({
          next: res => {
            this.danhsachdotgieotrong = res.result
            this.ser.getThongTinDotBonPhan(dataaddressplatingseason).subscribe({
              next: res => {
                this.danhsachdotbonphan = res.result;
                this.ser.getThongTinDotChamSoc(dataaddressplatingseason).subscribe({
                  next: res => {
                    this.danhsachdotchamsoc = res.result;
                    this.ser.getThongTinDotThuHoach(dataaddressplatingseason).subscribe({
                      next: res => {
                        this.danhsachdotthuhoach = res.result;
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }
  themDotGieoTrong() {
    const dialogRef = this.dialog.open(ModaldotgieotrongComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachdotgieotrong = [];
      let dataaddressplatingseason: Addressplantingseason = new Addressplantingseason();
      dataaddressplatingseason.plantingseasonid = this.data.txId
      this.ser.getThongTinDotGieoTrong(dataaddressplatingseason).subscribe({
        next: res => {
          this.danhsachdotgieotrong = res.result
        }
      })
    });
  }
  themDotBonPhan() {
    const dialogRef = this.dialog.open(ModaldotbonphanComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachdotbonphan = [];
      let dataaddressplatingseason: Addressplantingseason = new Addressplantingseason();
      dataaddressplatingseason.plantingseasonid = this.data.txId
      this.ser.getThongTinDotBonPhan(dataaddressplatingseason).subscribe({
        next: res => {
          this.danhsachdotbonphan = res.result

        }
      })
    });
  }
  themDotChamSoc() {
    const dialogRef = this.dialog.open(ModaldotchamsocComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachdotchamsoc = [];
      let dataaddressplatingseason: Addressplantingseason = new Addressplantingseason();
      dataaddressplatingseason.plantingseasonid = this.data.txId
      this.ser.getThongTinDotChamSoc(dataaddressplatingseason).subscribe({
        next: res => {
          this.danhsachdotchamsoc = res.result
        }
      })
    });
  }
  themDotThuHoach() {
    const dialogRef = this.dialog.open(ModaldotthuhoachComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachdotthuhoach = [];
      let dataaddressplatingseason: Addressplantingseason = new Addressplantingseason();
      dataaddressplatingseason.plantingseasonid = this.data.txId
      this.ser.getThongTinDotThuHoach(dataaddressplatingseason).subscribe({
        next: res => {
          this.danhsachdotthuhoach = res.result
        }
      })
    });
  }
  local: Storage = localStorage;
  sanPhamThuHoachTuDotThuHoach(item: Danhsachdotthuhoach) {
    this.local.setItem('iddotthuhoach', item.Key);
    this.local.setItem('ngaytaodotthuhoach', item.Record.datecreated);
    this.local.setItem('soluongtrongdotthuhoach', item.Record.quantity);
    this.local.setItem('ketquatrongdotthuhoach', item.Record.result);
    this.local.setItem('namesanphamcuadotthuhoach', this.thongtinproduct.name);
    this.router.navigateByUrl('/chitietdotthuhoach/' + item.Key)
  }
}
