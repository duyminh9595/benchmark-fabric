import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Danhsachthietbi } from 'src/app/modelorg/danhsachthietbi';
import { DulieuguivethietbiService } from './service/dulieuguivethietbi.service';

@Component({
  selector: 'app-dulieuguivethietbi',
  templateUrl: './dulieuguivethietbi.component.html',
  styleUrls: ['./dulieuguivethietbi.component.css']
})
export class DulieuguivethietbiComponent implements OnInit {
  data: Danhsachthietbi = new Danhsachthietbi();
  constructor(private activeRoute: ActivatedRoute, private router: Router, private ser: DulieuguivethietbiService) {
    this.data.Key = localStorage.getItem('addressdevice')!
    this.data.Record.name = localStorage.getItem('namedevice')!
    this.data.Record.description = localStorage.getItem('descriptiondevice')!
    this.data.Record.addressfarm = localStorage.getItem('addressfarmdevice')!
    this.data.Record.location = localStorage.getItem('addresslocationdevice')!
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.duLieuGuiVeThietBi());
  }
  id!: string;
  duLieuGuiVeThietBi() {
    let checkidthietbi = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidthietbi) {
      let idthietbi = this.activeRoute.snapshot.paramMap.get('id')!;
      this.id = idthietbi

    }
    else {
      // this.router.navigateByUrl('/danhsachthietbi')
    }
  }
  themDuLieuChoThietBi() {

  }
}
