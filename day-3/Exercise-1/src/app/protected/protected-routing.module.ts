import { NgModule } from '@angular/core';
import { ProtectedComponent } from './protected/protected.component';
import { dataResolver } from '../Resolver/data.resolver';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../Guard/auth.guard';

const routes: Routes = [
  { path: '',
    component: ProtectedComponent, // Lazy-loaded component
    canActivate: [authGuard],
    resolve: {
      data: dataResolver // Use the DataResolver to fetch data before navigation
    }
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
