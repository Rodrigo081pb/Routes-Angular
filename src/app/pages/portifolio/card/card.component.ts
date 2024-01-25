import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ){

    //http://localhost:4200/portifolio/{1}

    // Para parâmetros de rota
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    // Olhando o primeiro filho da rota
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )


    //http://localhost:4200/portifolio/1?name=Rodrigo&token=777 (RESGATANDO QUERY E INFORMAÇÕES)

    // Para parâmetros de consulta
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )

   }

   // Setando o componenete para assim que ele iniciar após iniciar ele volta novamente pra home apos o intervalo de 5 segundos
   ngOnInit(): void {
   // setInterval(()=>{
   //   this.navegador.navigate(['/'])
   // }, 5000)
  }
}
// O termo queryParams no contexto do Angular refere-se aos parâmetros de consulta em uma URL. Parâmetros de consulta são elementos adicionais que podem ser anexados a uma URL para fornecer informações adicionais ou opções. Eles são geralmente representados como pares chave-valor e são separados do caminho da URL por um ponto de interrogação (?), enquanto os pares chave-valor são separados por símbolos &.
