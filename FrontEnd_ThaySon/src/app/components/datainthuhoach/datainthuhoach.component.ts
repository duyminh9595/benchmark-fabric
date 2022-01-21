import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aboutdotthuhoach } from 'src/app/modelorg/aboutdotthuhoach';
import { Dataoutputdetail } from 'src/app/modelorg/dataoutputdetail';
import { Harvestingaddress } from 'src/app/modelorg/harvestingaddress';
import { Spoutputaddress } from 'src/app/modelorg/spoutputaddress';
import { Thongtinproduct } from 'src/app/modelorg/thongtinproduct';
import { Vumua } from 'src/app/modelorg/vumua';
import { ChitietvumuaService } from '../chitietvumua/service/chitietvumua.service';
import { DatainthuhoachService } from './service/datainthuhoach.service';

@Component({
  selector: 'app-datainthuhoach',
  templateUrl: './datainthuhoach.component.html',
  styleUrls: ['./datainthuhoach.component.css']
})
export class DatainthuhoachComponent implements OnInit {
  data: Aboutdotthuhoach = new Aboutdotthuhoach();
  namenongsan!: string;
  constructor(private ser: ChitietvumuaService, private serDataOutput: DatainthuhoachService, private router: Router) {
    this.data.iddotthuhoach = localStorage.getItem('iddotthuhoach')!
    this.data.ketquatrongdotthuhoach = localStorage.getItem('ketquatrongdotthuhoach')!
    this.data.ngaytaodotthuhoach = localStorage.getItem('ngaytaodotthuhoach')!
    this.data.soluongtrongdotthuhoach = localStorage.getItem('soluongtrongdotthuhoach')!
    this.namenongsan = localStorage.getItem('namesanphamcuadotthuhoach')!
  }
  danhsachsanphamoutput: Dataoutputdetail[] = [];
  thongtinproduct: Thongtinproduct = new Thongtinproduct();
  ngOnInit(): void {
    let datasee: Spoutputaddress = new Spoutputaddress();
    datasee.spoutputaddress = this.data.iddotthuhoach;
    this.serDataOutput.seeSPOUTPUTBaseonThuHoach(datasee).subscribe({
      next: res => {
        this.danhsachsanphamoutput = res.result
      }
    })
  }
  thuHoachSanPham() {
    let datasee1: Harvestingaddress = new Harvestingaddress();
    datasee1.harvestingaddress = this.data.iddotthuhoach
    this.serDataOutput.thuhoachsanpham(datasee1).subscribe({
      next: res => {
        this.danhsachsanphamoutput = []
        let datasee: Spoutputaddress = new Spoutputaddress();
        datasee.spoutputaddress = this.data.iddotthuhoach;
        this.serDataOutput.seeSPOUTPUTBaseonThuHoach(datasee).subscribe({
          next: res => {
            this.danhsachsanphamoutput = res.result
          }
        })
      },
      error: err => {
        alert("Thu hoạch thất bại")
      }
    })

  }
  local: Storage = localStorage;
  chitietchamsocsanphamoutput(dataoutputdetail: Dataoutputdetail) {
    this.local.setItem('idspoutput', dataoutputdetail.Key);
    this.local.setItem('spoutputngaytao', dataoutputdetail.Record.datecreated);
    this.local.setItem('spoutputngaymua', dataoutputdetail.Record.ngaymua);
    this.local.setItem('spoutputdaban', dataoutputdetail.Record.daban.toString());
    this.router.navigateByUrl('/chitietsanphamoutput/' + dataoutputdetail.Key)
  }

}
