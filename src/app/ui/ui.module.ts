import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import {LoginActivateService} from '../services/login-activate.service';

const routes: Routes = [
  {path: '', redirectTo: 's3/', pathMatch: 'full'},

  {path: 'login', component: ParkingDetailComponent},
  {path: 's3/', component: ParkingGridComponent, canActivate: [LoginActivateService]}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainPageComponent, LoginComponent]
})
export class UiModule {
}
