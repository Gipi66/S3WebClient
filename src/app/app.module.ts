import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

// const routes: Routes = [
//   {path: '', redirectTo: 's3/', pathMatch: 'full'},
//   {path: 's3/:path', component: MainPageComponent, canActivate: [LoginActivateService]},
//   {path: 'login', component: LoginComponent}
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UiModule, BrowserAnimationsModule, FormsModule
    // BrowserModule, UiModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
