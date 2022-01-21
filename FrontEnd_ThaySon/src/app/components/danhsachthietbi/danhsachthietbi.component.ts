import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Danhsachthietbi } from 'src/app/modelorg/danhsachthietbi';
import { DanhsachthietbicuanodeService } from './service/danhsachthietbicuanode.service';

@Component({
  selector: 'app-danhsachthietbi',
  templateUrl: './danhsachthietbi.component.html',
  styleUrls: ['./danhsachthietbi.component.css']
})
export class DanhsachthietbiComponent implements OnInit {

  constructor(private ser: DanhsachthietbicuanodeService, private router: Router) { }
  danhsachthietbi: Danhsachthietbi[] = [];
  ngOnInit(): void {
    this.ser.getThietBiCuaToChuc().subscribe({
      next: res => {
        this.danhsachthietbi = res.result
      }
    })
  }
  local: Storage = localStorage;
  xemchitietnongtrai(id: string) {
    this.router.navigateByUrl('/chitietnongtrai/' + id)
  }
  xemDuLieuGuiVeThietBi(id: string, item: Danhsachthietbi) {
    this.local.setItem('addressfarmdevice', item.Record.addressfarm);
    this.local.setItem('addresslocationdevice', item.Record.location);
    this.local.setItem('descriptiondevice', item.Record.description);
    this.local.setItem('namedevice', item.Record.name);
    this.local.setItem('addressdevice', item.Key);
    this.router.navigateByUrl('/dulieuguivethietbi/' + id)
  }
}
