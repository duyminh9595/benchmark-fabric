import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Addressfarm } from 'src/app/modelorg/addressfarm';
import { Chitietnongtrai } from 'src/app/modelorg/chitietnongtrai';
import { Danhsachkhuvuc } from 'src/app/modelorg/danhsachkhuvuc';
import { Danhsachnongsan } from 'src/app/modelorg/danhsachnongsan';
import { Danhsachthietbi } from 'src/app/modelorg/danhsachthietbi';
import { Danhsachvumua } from 'src/app/modelorg/danhsachvumua';
import { ModalthemkhuvucComponent } from '../modalthemkhuvuc/modalthemkhuvuc.component';
import { ModalthemnongsanComponent } from '../modalthemnongsan/modalthemnongsan.component';
import { ModalthemthietbiComponent } from '../modalthemthietbi/modalthemthietbi.component';
import { ModalthemvumuaComponent } from '../modalthemvumua/modalthemvumua.component';
import { ChitietnongtraiService } from './service/chitietnongtrai.service';

@Component({
  selector: 'app-chitietnongtrai',
  templateUrl: './chitietnongtrai.component.html',
  styleUrls: ['./chitietnongtrai.component.css']
})
export class ChitietnongtraiComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router, private ser: ChitietnongtraiService, public dialog: MatDialog) { }
  data: Chitietnongtrai = new Chitietnongtrai();
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailNongTrai());
  }
  id!: string;
  danhsachkhuvuccuanongtrai: Danhsachkhuvuc[] = [];
  danhsachnongsancuanongtrai: Danhsachnongsan[] = [];
  danhsachvumua: Danhsachvumua[] = [];
  danhsachthietbi: Danhsachthietbi[] = [];
  detailNongTrai() {
    let checkidnongtraiexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidnongtraiexist) {
      let idnongtrai = this.activeRoute.snapshot.paramMap.get('id')!;
      console.log(idnongtrai)
      this.ser.getChiTietNongTrai(idnongtrai).subscribe({
        next: res => {
          this.data = res.result;
          this.id = idnongtrai;
          console.log(this.data.logo)
          this.ser.getDanhSachKhuVucCuaNongTrai(this.id).subscribe({
            next: res => {
              this.danhsachkhuvuccuanongtrai = res.result;
              this.ser.getDanhSachNongSancCuaNongTrai(this.id).subscribe({
                next: res => {
                  this.danhsachnongsancuanongtrai = res.result;
                  let dataAddressNongTrai: Addressfarm = new Addressfarm();
                  dataAddressNongTrai.addressfarm = this.id
                  this.ser.getDanhSachVuMuaCuaNongTrai(dataAddressNongTrai).subscribe({
                    next: res => {
                      console.log(res.result)
                      this.danhsachvumua = res.result
                      this.ser.getDanhsachthietbi(dataAddressNongTrai.addressfarm).subscribe({
                        next: res => {
                          this.danhsachthietbi = res.result;
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        },
        error: err => {
          this.router.navigateByUrl('/danhsachnongtrai')
        }
      })
    }
    else {
      this.router.navigateByUrl('/danhsachnongtrai');
    }
  }
  themVuMua() {
    const dialogRef = this.dialog.open(ModalthemvumuaComponent, {
      width: '550px',
      data: { danhsachkhuvuccuanongtrai: this.danhsachkhuvuccuanongtrai, danhsachnongsancuanongtrai: this.danhsachnongsancuanongtrai, farmid: this.id }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachvumua = [];
      let dataAddressNongTrai: Addressfarm = new Addressfarm();
      dataAddressNongTrai.addressfarm = this.id
      this.ser.getDanhSachVuMuaCuaNongTrai(dataAddressNongTrai).subscribe({
        next: res => {
          console.log(res.result)
          this.danhsachvumua = res.result
        }
      })
    });
  }
  chiTietVuMua(id: string) {

  }
  themKhuVuc() {
    const dialogRef = this.dialog.open(ModalthemkhuvucComponent, {
      width: '550px',
      data: this.id
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachkhuvuccuanongtrai = [];
      this.ser.getDanhSachKhuVucCuaNongTrai(this.id).subscribe({
        next: res => {
          this.danhsachkhuvuccuanongtrai = res.result
        }, error: err => {

        }
      })
    });
  }
  themNongSan() {
    const dialogRef = this.dialog.open(ModalthemnongsanComponent, {
      width: '550px',
      data: this.id
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachnongsancuanongtrai = [];
      this.ser.getDanhSachNongSancCuaNongTrai(this.id).subscribe({
        next: res => {
          this.danhsachnongsancuanongtrai = res.result
          console.log(res)
        },
        error: err => {

        }
      })
    });

  }
  themThietBi() {
    const dialogRef = this.dialog.open(ModalthemthietbiComponent, {
      width: '550px',
      data: { danhsachkhuvuccuanongtrai: this.danhsachkhuvuccuanongtrai, farmid: this.id }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.danhsachthietbi = [];
      this.ser.getDanhsachthietbi(this.id).subscribe({
        next: res => {
          this.danhsachthietbi = res.result;
        }
      })
    });

  }
  local: Storage = localStorage;
  chiTietThietBi(item: Danhsachthietbi) {
    this.local.setItem('addressfarmdevice', item.Record.addressfarm);
    this.local.setItem('addresslocationdevice', item.Record.location);
    this.local.setItem('descriptiondevice', item.Record.description);
    this.local.setItem('namedevice', item.Record.name);
    this.local.setItem('addressdevice', item.Key);
    this.router.navigateByUrl('/dulieuguivethietbi/' + item.Key)
  }
}
