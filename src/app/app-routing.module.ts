import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrProgramasComponent } from './content/cr-programas/cr-Programas/cr-Programas.component';
import { CronogramaDeActividadesComponent } from './content/cronograma-de-actividades/cronograma-de-actividades.component';
import { IncioCrProgramaComponent } from './content/incio-cr-programa/incio-cr-programa.component';
import { InicioProgramasComponent } from './content/InicioProgramas/inicioProgramas/inicioProgramas.component';
const routes: Routes = [
  {
    path: 'menu', component: InicioProgramasComponent,
    children: [
    { path: '', component: IncioCrProgramaComponent },
    { path: 'crear', component: CrProgramasComponent },
    { path: 'cronograma', component: CronogramaDeActividadesComponent },
    { path: '', redirectTo: 'menu', pathMatch: 'full'},

    ]
  }
  ,
  { path: '', redirectTo: 'menu', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
