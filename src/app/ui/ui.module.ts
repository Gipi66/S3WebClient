import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginActivateService} from '../services/login-activate.service';
import {LayoutComponent} from './layout/layout.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

// const routes: Routes = [
//   // {path: '', redirectTo: 's3/', pathMatch: 'full'},
//   // {path: 'login', component: LoginComponent},
//   {path: ':path', component: MainPageComponent, canActivate: [LoginActivateService]},
//   {path: 'login', component: MainPageComponent, canActivate: [LoginActivateService]},
//   // {path: '', component: MainPageComponent, canActivate: [LoginActivateService]}
// ];
const routes: Routes = [
  {path: '', redirectTo: 's3/', pathMatch: 'full'},

  {path: 's3/:path', component: MainPageComponent, canActivate: [LoginActivateService]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [MainPageComponent, LoginComponent, LayoutComponent],
  exports: [RouterModule, MainPageComponent, LoginComponent, LayoutComponent]
})
export class UiModule {
}

export const routingComponents = [MainPageComponent];
