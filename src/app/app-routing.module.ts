import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadoComponentComponent } from './dado-component/dado-component.component';

const routes: Routes = [
  {path:'', component:DadoComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
