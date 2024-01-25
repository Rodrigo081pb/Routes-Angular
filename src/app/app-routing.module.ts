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
  //portfolio
  //portfolio/1
  //portfolio/1/child
  { path:'portifolio', component: CardComponent, children:[
    { path:':id', component:CardComponent},
    { path:':id/child', component:CardComponent},
  ]},
  //patch - caminho
  //prefix já vem por padrão é interessante colocar a principal já como full pra não ter confusão nas URl's
  { path:'**',redirectTo:''}
];

@NgModule({

//Os aquivos principais que ele esta importando da constante Routes
  imports: [RouterModule.forRoot(routes)],

// O router module ta sendo exportado
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* Trechos de rotas coringas

Quando o usuário acessar qualquer tipo de rota não mapeavál

podemos escolher o que pode acontecer com ele tipo redirecionar pra outra pagina

tipo

const routes: Routes = [

{path:'**',redirectTo:''}

]

*/
