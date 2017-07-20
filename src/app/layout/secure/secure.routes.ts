import { HomeComponent } from './../../secure/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
