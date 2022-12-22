import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypePhotosession} from "../../../models/type-photosession";
import {TypePhotosessionService} from "../../../service/type-photosession.service";
import {LocationService} from "../../../service/location.service";
import {Location} from "../../../models/location";
import {Specialist} from "../../../models/specialist";
import {SpecialistService} from "../../../service/specialist.service";
import {TokenStorageService} from "../../../service/token-storage.service";
import {OrderService} from "../../../service/order.service";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  photosession: TypePhotosession[] = [];
  local: Location[] =[];
  specialist: Specialist[]=[];
  currentUser!:any;
  date: Date[]=[];

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private orderService:OrderService, private photosessionService:TypePhotosessionService, private  localService: LocationService, private spcialistService: SpecialistService, private  token: TokenStorageService) { }


  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  ngOnInit(): void {
    console.log('Modal init');
    this.getPhotosessions()
    this.getLocations()
    this.getSpecialist()
    this.currentUser = this.token.getUser();
  }

  getLocations(){
    return this.localService.getLocations().subscribe(
      local =>{
        console.log(local);
        this.local=local
      }
    )
  }

  getPhotosessions(){
    return this.photosessionService.getPhotosessions().subscribe(
      photosession =>{
        console.log(photosession);
        this.photosession=photosession
      }
    )
  }
  getSpecialist(){
    return this.spcialistService.getSpecialist().subscribe(
      specialist =>{
        console.log(specialist);
        this.specialist=specialist
      }
    )
  }
  form:any={
    id_photo: this.photosession[0],
    id_location: this.local[0],
    id_specialist: this.specialist[0],
    date_in: this.date,
  };





  onSubmit(){

    this.orderService.orderCreate(this.form).subscribe({
      next: data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
      error: err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  })

  }



  closeMe() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
  }

  ngOnDestroy(): void {
    console.log(' Modal destroyed', );
  }


}
