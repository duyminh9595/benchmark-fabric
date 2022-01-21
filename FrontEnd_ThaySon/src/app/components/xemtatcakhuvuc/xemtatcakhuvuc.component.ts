import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Danhsachkhuvuc } from 'src/app/modelorg/danhsachkhuvuc';
import { Xemtatcakhuvuc } from 'src/app/modelorg/xemtatcakhuvuc';
import { XemtatcakhuvucService } from './service/xemtatcakhuvuc.service';

@Component({
  selector: 'app-xemtatcakhuvuc',
  templateUrl: './xemtatcakhuvuc.component.html',
  styleUrls: ['./xemtatcakhuvuc.component.css']
})
export class XemtatcakhuvucComponent implements OnInit {

  constructor(private ser: XemtatcakhuvucService, private router: Router) { }
  danhsachkhuvuc: Xemtatcakhuvuc[] = [];
  ngOnInit(): void {
    this.ser.getDanhSachKhuVuc().subscribe(this.getData());
  }
  getData() {
    return (data: any) => {
      this.danhsachkhuvuc = data.result;
    }
  }
  seeInfoNongTrai(id: string) {
    this.router.navigateByUrl('/chitietnongtrai/' + id)
  }
  seeThietBiOfArea(id: string) {
    this.router.navigateByUrl('/xemthietbicuakhuvuc/' + id);
  }
}
