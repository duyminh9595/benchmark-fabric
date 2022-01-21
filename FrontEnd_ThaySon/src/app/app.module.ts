import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatDialogModule
} from '@angular/material/dialog';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatFormFieldModule
} from '@angular/material/form-field';

import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  MatTabsModule
} from '@angular/material/tabs';
import {
  MatTableModule
} from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HompageComponent } from './components/hompage/hompage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyJwt } from './auth/verify-jwt.service';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire/compat";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/compat/storage";
import { HttpClientModule } from '@angular/common/http';
import { DanhsachnongtraiComponent } from './components/danhsachnongtrai/danhsachnongtrai.component';
import { ThemnongtraiComponent } from './components/themnongtrai/themnongtrai.component';
import { ChitietnongtraiComponent } from './components/chitietnongtrai/chitietnongtrai.component';
import { ModalthemvumuaComponent } from './components/modalthemvumua/modalthemvumua.component';
import { ModalthemkhuvucComponent } from './components/modalthemkhuvuc/modalthemkhuvuc.component';
import { ModalthemnongsanComponent } from './components/modalthemnongsan/modalthemnongsan.component';
import { XemtatcakhuvucComponent } from './components/xemtatcakhuvuc/xemtatcakhuvuc.component';
import { XemtatvumuacuanodeComponent } from './components/xemtatvumuacuanode/xemtatvumuacuanode.component';
import { ChitietvumuaComponent } from './components/chitietvumua/chitietvumua.component';
import { ModaldotgieotrongComponent } from './components/modaldotgieotrong/modaldotgieotrong.component';
import { ModaldotbonphanComponent } from './components/modaldotbonphan/modaldotbonphan.component';
import { ModaldotchamsocComponent } from './components/modaldotchamsoc/modaldotchamsoc.component';
import { ModaldotthuhoachComponent } from './components/modaldotthuhoach/modaldotthuhoach.component';
import { DanhsachnongsanComponent } from './components/danhsachnongsan/danhsachnongsan.component';
import { DanhsachthietbiComponent } from './components/danhsachthietbi/danhsachthietbi.component';
import { ModalthemthietbiComponent } from './components/modalthemthietbi/modalthemthietbi.component';
import { ThietbicuakhuvucComponent } from './components/thietbicuakhuvuc/thietbicuakhuvuc.component';
import { DulieuguivethietbiComponent } from './components/dulieuguivethietbi/dulieuguivethietbi.component';
import { DulieuguivethietbicompComponent } from './components/dulieuguivethietbicomp/dulieuguivethietbicomp.component';
import { ModalthemdulieuchothietbiComponent } from './components/modalthemdulieuchothietbi/modalthemdulieuchothietbi.component';
import { DatainthuhoachComponent } from './components/datainthuhoach/datainthuhoach.component';
import { ChitietsanphamoutputComponent } from './components/chitietsanphamoutput/chitietsanphamoutput.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: HompageComponent,
    children: [



      { path: 'danhsachnongtrai', component: DanhsachnongtraiComponent },
      { path: 'themnongtrai', component: ThemnongtraiComponent },
      { path: 'chitietnongtrai/:id', component: ChitietnongtraiComponent },
      { path: 'xemtatcakhuvuc', component: XemtatcakhuvucComponent },
      { path: 'xemtatcavumua', component: XemtatvumuacuanodeComponent },
      { path: 'chitietvumua/:id', component: ChitietvumuaComponent },
      { path: 'danhsachnongsan', component: DanhsachnongsanComponent },
      { path: 'danhsachthietbi', component: DanhsachthietbiComponent },
      { path: 'xemthietbicuakhuvuc/:id', component: ThietbicuakhuvucComponent },
      { path: 'dulieuguivethietbi/:id', component: DulieuguivethietbicompComponent },
      { path: 'chitietdotthuhoach/:id', component: DatainthuhoachComponent },
      { path: 'chitietsanphamoutput/:id', component: ChitietsanphamoutputComponent },

    ]
    , canActivate: [VerifyJwt],

  },
  { path: '#', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, DashboardComponent, HompageComponent, HeaderComponent, SlideBarComponent,
    DanhsachnongtraiComponent,
    ThemnongtraiComponent, ChitietnongtraiComponent, ModalthemvumuaComponent, ModalthemkhuvucComponent, ModalthemnongsanComponent, XemtatcakhuvucComponent,
    XemtatvumuacuanodeComponent, ChitietvumuaComponent, ModaldotgieotrongComponent, ModaldotbonphanComponent, ModaldotchamsocComponent, ModaldotthuhoachComponent,
    DanhsachnongsanComponent, DanhsachthietbiComponent, ModalthemthietbiComponent, ThietbicuakhuvucComponent, DulieuguivethietbiComponent, DulieuguivethietbicompComponent, ModalthemdulieuchothietbiComponent, DatainthuhoachComponent, ChitietsanphamoutputComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule, FormsModule,
    ReactiveFormsModule, MatMenuModule,
    NgbModule, PerfectScrollbarModule, MatDatepickerModule, MatOptionModule, MatNativeDateModule, BrowserAnimationsModule, MatSelectModule, MatPaginatorModule, MatTableModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCygO7o54HwNq4eobN4848Xnaw_nuQgwck",
      authDomain: "newsproject-fa5bb.firebaseapp.com",
      projectId: "newsproject-fa5bb",
      storageBucket: "newsproject-fa5bb.appspot.com",
      messagingSenderId: "1053553302212",
      appId: "1:1053553302212:web:5ca79d1dd45c389ca28791",
      measurementId: "G-6Q30DEJELJ"
    }),
    HttpClientModule, MatDialogModule, MatPseudoCheckboxModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule, MatInputModule]
})
export class AppModule { }
