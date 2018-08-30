import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginActivateService} from '../services/login-activate.service';

const routes: Routes = [
  // {path: '', redirectTo: 's3/', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  {path: ':path', component: MainPageComponent, canActivate: [LoginActivateService]},
  // {path: '', component: MainPageComponent, canActivate: [LoginActivateService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [MainPageComponent, LoginComponent]
})
export class UiModule {
}
