import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component:LoginComponent},
    { path: 'sidebar', component:SidebarComponent},
    { path: 'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
    { path: '**', redirectTo: '/login' }  // Wildcard route to handle invalid routes
];
