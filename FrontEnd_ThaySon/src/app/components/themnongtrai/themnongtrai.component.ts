import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { finalize, Observable } from 'rxjs';
import { Nongtrai } from 'src/app/modelorg/nongtrai';
import { ThemnongtraiService } from './service/themnongtrai.service';

@Component({
  selector: 'app-themnongtrai',
  templateUrl: './themnongtrai.component.html',
  styleUrls: ['./themnongtrai.component.css']
})
export class ThemnongtraiComponent implements OnInit {

  constructor(private storage: AngularFireStorage, private router: Router, private themnongtraiser: ThemnongtraiService) { }
  nongtrai: Nongtrai = new Nongtrai();
  ngOnInit(): void {
  }
  onKeyDiaChi(event: any) {
    this.nongtrai.address = event.target.value;
  }
  onKeyMoTa(event: any) {
    this.nongtrai.description = event.target.value;
  }
  onKeyFacebook(event: any) {
    this.nongtrai.facebook = event.target.value;
  }
  onKeyLocation(event: any) {
    this.nongtrai.location = event.target.value;
  }
  onKeySoDienThoai(event: any) {
    this.nongtrai.phone = event.target.value;
  }
  onKeyDiaChiWebsite(event: any) {
    this.nongtrai.website = event.target.value;
  }
  onKeyEmail(event: any) {
    this.nongtrai.email = event.target.value;
  }
  onKeyTenNongTrai(event: any) {
    this.nongtrai.name = event.target.value;
  }
  filePath!: string
  fb!: any;
  downloadURL!: Observable<string>;
  linkImageUrl: any;
  uploaded: boolean = false;
  upload(event: any) {
    console.log(this.filePath)
    // this.afStorage.upload('/images' + Math.random() + this.filePath, this.filePath);
    this.storage.upload('/images' + Math.random() + this.filePath, this.filePath)
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.linkImageUrl = this.fb
            this.nongtrai.logo = this.linkImageUrl;
            this.uploaded = true;
            console.log(this.linkImageUrl);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  localStore: Storage = localStorage;
  thucHienThemNongTrai() {
    this.themnongtraiser.doAddNongTrai(this.nongtrai).subscribe({
      next: res => {
        alert("Thêm nông trại thành công")
        this.router.navigateByUrl('/danhsachnongtrai')
      },
      error: err => {
        console.log(err)
        alert("Lỗi")
      }
    })
  }
  doExit() {
    this.router.navigateByUrl('/danhsachnongtrai')
  }
}
