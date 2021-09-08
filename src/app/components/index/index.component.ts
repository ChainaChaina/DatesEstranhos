import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  dates = [['Teorizar quem dos amigos venceria nos jogo vorazes', ''],['Ver quem imita o outro melhor', ''],['Ver o primeiro e ultimo filme dos seus atores preferidos juntos', ''],['Fazer uma comida típica que vocês nunca comeriam em um dia normal', '@Chaina_jpg'],['Fazer presente pros sogros sem motivo algum', ''],['Apresentação power point: as 10 melhores coisas de estar do seu lado', '@Chaina_jpg'],['Usar roupas um do outro e postar fotos juntos', ''],['Fazer drinks em casa', ''],['Fazer covers de fotos antigas dos seus pais quando eles namoravam', '@Chaina.jpg'],['S3xo', '@pelasbarbasdoAzeredo'],['Planejar como gastariam 10 milhões de dolares', '@Chaina.jpg'],['Trilha em algum morro', '@Marcao_Aguiar'],['escolher 10 animais diferentes e combina-los em 5 hibridos e o porque da mistura', '@eevelyn_rb'],['construir pipas juntos e ver qual delas é a melhor', '@mani.duarte'],['Assistir 1h de video react de "gadgets" do Aliexpress', '@Veniali_Davidson'],['Cineminha na cabana com lençol', '@Xuliaribeiro'],['jogar os jogos favoritos um do outro', ''],['montar looks para festas e eventos que vocês nunca iriam', ''],['Trabalho Voluntário juntos', '@Marisegato'],['Sessão Mútua de fotos nu', '@Marisegato'],['Ver documentário de serial killer', '@brunna_pauli'],['Dirigir sem destino ouvindo música', '@_Carolrf'],['Olhar o céu Noturno e tentar adivinhar se é estelha ou avião', '@Gustavo_vDantas'],['Picknick em um mirante', '@Alvaro.Bremenkamp'],['Andar de patins', '@Hug.rocha'],['jogos de tabuleiro', '@Yure.bm'] ]
  date = ''
  author = ''
  gameOver = false
  constructor() { }

  ngOnInit(): void {
  }

  handlerClick(){
    let num = Math.floor(Math.random() * this.dates.length)
    if (this.dates.length == 0){
      this.gameOver = true
      this.author = ''
      return
    }
    this.date = this.dates[num][0]
    this.author = this.dates[num][1]
    this.dates.splice(num, 1); 
  }
}
