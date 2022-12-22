import { Component, OnInit } from '@angular/core';
import {Location} from "../models/location";
import {DomSanitizer} from "@angular/platform-browser";
import {TypePhotosessionService} from "../service/type-photosession.service";
import {TypePhotosession} from "../models/type-photosession";

@Component({
  selector: 'app-type-photosession',
  templateUrl: './type-photosession.component.html',
  styleUrls: ['./type-photosession.component.css']
})
export class TypePhotosessionComponent implements OnInit {

  photosession: TypePhotosession[] = [];

  constructor(public sanitizer: DomSanitizer, private photosessionService:TypePhotosessionService) { }

  ngOnInit(): void {
    this.getPhotosessions()
  }

  getPhotosessions(){
    return this.photosessionService.getPhotosessions().subscribe(
      photosession =>{
        console.log(photosession);
        this.photosession=photosession
      }
    )
  }

}
