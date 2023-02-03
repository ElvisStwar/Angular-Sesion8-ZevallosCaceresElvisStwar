import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './registro/datos/datos.component';

const routes: Routes = [

  {path: 'home', component: DatosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
