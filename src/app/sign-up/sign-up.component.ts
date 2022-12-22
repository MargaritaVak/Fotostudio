import { Component, OnInit } from '@angular/core';
import {RegisterClientService} from "../service/register-client.service";
import {first} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname:null,
    patronymic:null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private resisterClientService: RegisterClientService
  ) { }

  ngOnInit(): void {
  }


  onSubmit() {
   const{firstname, lastname, patronymic, email, password} = this.form;

    this.resisterClientService.registerСlient(this.form).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });

  }
}
