//Modulo principal do angular - Angular/core
import { NgModule } from '@angular/core';

//Parte do angular que cuida da navegação e rotiamento

//Routes (tipagem) / Router module é uma classe
import { RouterModule, Routes } from '@angular/router';

import {  TitleComponent  } from './pages/index/title/title.component'
import {CardComponent} from './pages/portifolio/card/card.component'

//Constante - representação dos serviços de rota - um array de objeto de rota
const routes: Routes = [
  { path:'', component: TitleComponent, pathMatch:'full'},
  {path:'portifolio', component:CardComponent, pathMatch:'prefix'}
//patch - caminho
];

@NgModule({

//Os aquivos principais que ele esta importando da constante Routes
  imports: [RouterModule.forRoot(routes)],

// O router module ta sendo exportado
  exports: [RouterModule]
})
export class AppRoutingModule { }
