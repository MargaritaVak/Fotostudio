import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TokenStorageService} from "../service/token-storage.service";
import {ModalService} from "../service/modal.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-client-personal-account',
  templateUrl: './client-personal-account.component.html',
  styleUrls: ['./client-personal-account.component.css']
})
export class ClientPersonalAccountComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService, private modalService: ModalService) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();

  }

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  openModal() {
    this.sub = this.modalService
      .openModal(this.entry)
      .subscribe((v) => {
        //your logic
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
