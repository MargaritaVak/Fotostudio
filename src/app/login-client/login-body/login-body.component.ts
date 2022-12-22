import { Component, OnInit } from '@angular/core';
import {RegisterClientService} from "../../service/register-client.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})
export class LoginBodyComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private loginClientService: RegisterClientService, private tokenService: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
    this.isLoggedIn = true;

  }
  }


  onSubmit(): void {
    const { email, password } = this.form;

    this.loginClientService.loginClient(email, password).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
