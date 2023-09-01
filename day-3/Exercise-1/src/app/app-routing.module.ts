import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './Guard/auth.guard';
import { dataResolver } from './Resolver/data.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, resolve: { data: dataResolver },  canActivate: [authGuard]},
  {
    path: 'module1',
    loadChildren: () => import('./module1/module1.module').then((m) => m.Module1Module)
  },
  {
    path: 'module2',
    loadChildren: () => import('./module2/module2.module').then((m) => m.Module2Module)
  },
  {
    path: 'protected',
    loadChildren: () => import('./protected/protected.module').then((m) => m.ProtectedModule)
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
