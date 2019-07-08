import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [{
  path: "catalog", component: FilterComponent
},
{
  path: '',
  redirectTo: '/catalog',
  pathMatch: 'full'
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
