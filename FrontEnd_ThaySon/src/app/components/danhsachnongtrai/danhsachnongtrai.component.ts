import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Danhsachchitietnongtrai } from 'src/app/modelorg/danhsachchitietnongtrai';
import { DanhsachService } from './service/danhsach.service';

@Component({
  selector: 'app-danhsachnongtrai',
  templateUrl: './danhsachnongtrai.component.html',
  styleUrls: ['./danhsachnongtrai.component.css']
})
export class DanhsachnongtraiComponent implements OnInit {

  constructor(private danhsachnongtraiser: DanhsachService, private router: Router) { }
  danhsachnongtrai: Danhsachchitietnongtrai[] = []
  ngOnInit(): void {
    this.danhsachnongtraiser.getDanhSachNongTrai().subscribe(this.getDatas())
  }
  getDatas() {
    return (data: any) => {
      this.danhsachnongtrai = data.result;
    }
  }
  themNongTrai() {
    this.router.navigateByUrl('/themnongtrai')
  }
  xemchitietnongtrai(id: string) {

    this.router.navigateByUrl('/chitietnongtrai/' + id)
  }
}
