import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Danhsachthietbi } from 'src/app/modelorg/danhsachthietbi';
import { ThietbicuakhuvucService } from './service/thietbicuakhuvuc.service';

@Component({
  selector: 'app-thietbicuakhuvuc',
  templateUrl: './thietbicuakhuvuc.component.html',
  styleUrls: ['./thietbicuakhuvuc.component.css']
})
export class ThietbicuakhuvucComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router, private ser: ThietbicuakhuvucService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailKhuVucThietBi());
  }
  danhsachthietbi: Danhsachthietbi[] = [];
  id!: string;
  detailKhuVucThietBi() {
    let checkidnongtraiexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidnongtraiexist) {
      let idkhuvuc = this.activeRoute.snapshot.paramMap.get('id')!;
      this.id = idkhuvuc
      this.ser.getThietBiCuaKhuVuc(idkhuvuc).subscribe({
        next: res => {
          this.danhsachthietbi = res.result;
        }
      })
    }
    else {
      this.router.navigateByUrl('/xemtatcakhuvuc')
    }
  }
}
