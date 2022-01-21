import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Xemtatcavumua } from 'src/app/modelorg/xemtatcavumua';
import { environment } from 'src/environments/environment';
import { XemtatcavumuaService } from './service/xemtatcavumua.service';

@Component({
  selector: 'app-xemtatvumuacuanode',
  templateUrl: './xemtatvumuacuanode.component.html',
  styleUrls: ['./xemtatvumuacuanode.component.css']
})
export class XemtatvumuacuanodeComponent implements OnInit {

  constructor(private ser: XemtatcavumuaService, private router: Router) { }
  data: Xemtatcavumua[] = [];
  ngOnInit(): void {
    this.ser.getTatCaVuMuaCuaNode().subscribe(this.getData())
  }
  getData() {
    return (data: any) => {
      this.data = data.result;
    }
  }

  local: Storage = localStorage;
  seeInfoNongTrai(id: string) {
    this.router.navigateByUrl('/chitietnongtrai/' + id)
  }

  seeInFoVuMua(data: Xemtatcavumua) {
    this.local.setItem('idvumua', data.Record.txId);
    this.local.setItem('idnongtrai', data.Record.addressfarm);
    this.local.setItem('idkhuvuc', data.Record.addressarea);
    this.local.setItem('idnongsan', data.Record.addressproduct);
    this.local.setItem('ngaytao', data.Record.datecreated);
    this.router.navigateByUrl('/chitietvumua/' + data.Record.txId)
  }
}
