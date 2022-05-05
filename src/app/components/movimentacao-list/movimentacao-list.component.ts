import { CorrentistaService } from './../../services/correntista.service';
import { MovimentacaoService } from './../../services/movimentacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
  movimentacoes:any;
  correntistas:any;
  correntista:any = {};
  

  constructor(
    private MovimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService) { }

  ngOnInit(): void {

    //não será mais por aqui, será pelo click de busca do butão
    this.exibirCorrentistas(); //ASSIM QUE OU A ROTA FOR DIRECIONADA, JÁ SERA REALIZADO UMA REQUISIÇÃO NO BACK-END

  }
  //TENTA BUSCAR AS DATAS SE NÃO EXIBE ERRO
  listMovimentacoes(): void {
    this.MovimentacaoService.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });


  }
}
