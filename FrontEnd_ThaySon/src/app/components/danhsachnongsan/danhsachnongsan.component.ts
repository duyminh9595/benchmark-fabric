import { Component, OnInit } from '@angular/core';
import { Danhsachnongsancuatochuc } from 'src/app/modelorg/danhsachnongsancuatochuc';
import { DanhsachnongsanService } from './service/danhsachnongsan.service';

@Component({
  selector: 'app-danhsachnongsan',
  templateUrl: './danhsachnongsan.component.html',
  styleUrls: ['./danhsachnongsan.component.css']
})
export class DanhsachnongsanComponent implements OnInit {
  danhsachnongsan: Danhsachnongsancuatochuc[] = [];
  constructor(private ser: DanhsachnongsanService) { }

  ngOnInit(): void {
    this.ser.getNongSanCuaToChuc().subscribe({
      next: res => {
        this.danhsachnongsan = res.result
      }
    })
  }

}
