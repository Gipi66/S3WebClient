import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';

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
    BrowserModule, UiModule
    // BrowserModule, UiModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
