import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public config: any = {};
  userImg!: string;
  homePage!: string;
  isNavbarCollapsed = true;
  flagvalue: any;
  countryName: any;
  langStoreValue!: string;
  defaultFlag!: string;
  isOpenSidebar!: boolean;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private router: Router
  ) {
  }
  listLang = [
    { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
    { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
    { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
  ];
  notifications: any[] = [
    {
      userImg: "assets/images/user/user1.jpg",
      userName: "Sarah Smith",
      time: "14 mins ago",
      message: "Please check your mail",
    },
    {
      userImg: "assets/images/user/user2.jpg",
      userName: "Airi Satou",
      time: "22 mins ago",
      message: "Work Completed !!!",
    },
    {
      userImg: "assets/images/user/user3.jpg",
      userName: "John Doe",
      time: "3 hours ago",
      message: "kindly help me for code.",
    },
    {
      userImg: "assets/images/user/user4.jpg",
      userName: "Ashton Cox",
      time: "5 hours ago",
      message: "Lets break for lunch...",
    },
    {
      userImg: "assets/images/user/user5.jpg",
      userName: "Sarah Smith",
      time: "14 mins ago",
      message: "Please check your mail",
    },
    {
      userImg: "assets/images/user/user6.jpg",
      userName: "Airi Satou",
      time: "22 mins ago",
      message: "Work Completed !!!",
    },
    {
      userImg: "assets/images/user/user7.jpg",
      userName: "John Doe",
      time: "3 hours ago",
      message: "kindly help me for code.",
    },
  ];
  ngOnInit() {





    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.defaultFlag = "assets/images/flags/us.jpg";
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }
  }

  ngAfterViewInit() {

  }
  callFullscreen() {

  }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
  }
  mobileMenuSidebarOpen(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains("side-closed");
    if (hasClass) {
      this.renderer.removeClass(this.document.body, "side-closed");
      this.renderer.removeClass(this.document.body, "submenu-closed");
    } else {
      this.renderer.addClass(this.document.body, "side-closed");
      this.renderer.addClass(this.document.body, "submenu-closed");
    }
  }
  public toggleRightSidebar(): void {
  }

}
