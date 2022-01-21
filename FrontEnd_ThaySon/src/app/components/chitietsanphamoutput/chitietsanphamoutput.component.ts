import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chitietspoutputmodel } from 'src/app/modelorg/chitietspoutputmodel';
import { Danhsachdotbonphanspoutput } from 'src/app/modelorg/danhsachdotbonphanspoutput';
import { Danhsachdotchamsocspoutput } from 'src/app/modelorg/danhsachdotchamsocspoutput';
import { Datavumuaspoutput } from 'src/app/modelorg/datavumuaspoutput';
import { Spoutputaddress } from 'src/app/modelorg/spoutputaddress';
import { ChitietspoutputService } from './service/chitietspoutput.service';

@Component({
  selector: 'app-chitietsanphamoutput',
  templateUrl: './chitietsanphamoutput.component.html',
  styleUrls: ['./chitietsanphamoutput.component.css']
})
export class ChitietsanphamoutputComponent implements OnInit {
  data: Chitietspoutputmodel = new Chitietspoutputmodel();
  constructor(private ser: ChitietspoutputService, private activeRoute: ActivatedRoute, private router: Router) {
    this.data.idspoutput = localStorage.getItem('idspoutput')!
    this.data.spoutputngaytao = localStorage.getItem('spoutputngaytao')!
    this.data.spoutputngaymua = localStorage.getItem('spoutputngaymua')!
    this.data.spoutputdaban = localStorage.getItem('spoutputdaban')!
  }
  danhsachdotbonphan: Danhsachdotbonphanspoutput[] = [];
  danhsachdotchamsoc: Danhsachdotchamsocspoutput[] = [];
  datavumuaspoutput: Datavumuaspoutput = new Datavumuaspoutput();
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailSPOUTPUT());

  }
  detailSPOUTPUT() {
    let checexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checexist) {
      let idspoutput = this.activeRoute.snapshot.paramMap.get('id')!;
      let data1: Spoutputaddress = new Spoutputaddress();
      data1.spoutputaddress = this.data.idspoutput;
      this.ser.seeBonPhanBaseonSPOUTPUT(data1).subscribe({
        next: res => {
          this.danhsachdotbonphan = res.result
          this.ser.seeChamSocnBaseonSPOUTPUT(data1).subscribe({
            next: res => {
              this.danhsachdotchamsoc = res.result
              this.ser.seeVuMuaBaseonSPOUTPUT(data1).subscribe({
                next: res => {
                  this.datavumuaspoutput = res.result
                }
              })
            }
          })
        }
      })
    }
    else {
      this.router.navigateByUrl('/')
    }
  }

}
