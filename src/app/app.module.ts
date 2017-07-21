import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';

import { SecureComponent } from './layout/secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './secure/home/home.component';
import {PublicComponent} from './layout/public/public.component';
import {AuthGuard} from './common/auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        PublicComponent,
        SecureComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
