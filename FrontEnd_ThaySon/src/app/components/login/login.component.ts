import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminLogin } from 'src/app/models/admin-login';
import { LoginSuccess } from 'src/app/models/login-success';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
  implements OnInit {

  authForm!: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  constructor(private formBuilder: FormBuilder, private ser: LoginService) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  adminSet() {
    if (this.authForm != undefined) {
      this.authForm.get("username")!.setValue("");
      this.authForm.get("password")!.setValue("");
    }
  }

  onKeyEmail(event: any) {
    this.email = event.target.value;
  }
  email!: string;
  password!: string;
  onKeyPassword(event: any) {
    this.password = event.target.value;
  }
  admin: AdminLogin = new AdminLogin();
  doLogin() {
    if (this.email.length > 0 && this.password.length > 0) {

      this.admin.email = this.email;
      this.admin.password = this.password;
      this.ser.doLoginAdmin(this.admin).subscribe({
        next: (res) => {
          console.log(res);
          this.loginSuccess(res);
        },
        error: (err) => {
          alert('Sai Email or Mật Khẩu');
        },
      })
    }
  }
  userSuccessDTO!: LoginSuccess;
  local: Storage = localStorage;
  loginSuccess(res: any) {
    this.userSuccessDTO = new LoginSuccess();
    this.userSuccessDTO.email = this.admin.email;
    this.userSuccessDTO.result = "Bearer " + res.result;
    this.local.setItem('emailLogin', this.userSuccessDTO.email);
    this.local.setItem('tokenLogin', this.userSuccessDTO.result);
    window.location.href = '/';
  }
}
