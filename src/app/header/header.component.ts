import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../service/token-storage.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search : String ="";
  isLoggedIn = false;
  firstname?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();


      this.firstname = user.firstname;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
