import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageBodyComponent} from "../main-page-body/main-page-body.component";
import {LoginBodyComponent} from "../login-client/login-body/login-body.component";
import {AllCategoryComponent} from "../all-category/all-category.component";
import {LocationPageComponent} from "../location-page/location-page.component";
import {TypePhotosessionComponent} from "../type-photosession/type-photosession.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {ClientPersonalAccountComponent} from "../client-personal-account/client-personal-account.component";


const routes: Routes = [
  {path:"", component: MainPageBodyComponent},
  {path:"login", component: LoginBodyComponent},
  {path:"all-category",component: AllCategoryComponent},
  {path:"location", component: LocationPageComponent},
  {path:"type-photosession", component: TypePhotosessionComponent},
  {path:"sign-up", component: SignUpComponent},
  {path:"client-personal-account", component: ClientPersonalAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule { }
