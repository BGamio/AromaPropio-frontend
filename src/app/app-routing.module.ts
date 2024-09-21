import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfumeListComponent } from './components/perfume-list/perfume-list.component';
import { PerfumeFormComponent } from './components/perfume-form/perfume-form.component';

const routes: Routes = [
  { path: 'perfumes', component: PerfumeListComponent },
  { path: 'add-perfume', component: PerfumeFormComponent },
  { path: '', redirectTo: '/perfumes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
