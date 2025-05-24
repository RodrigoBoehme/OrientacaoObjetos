// Dinâmica Uno

import { BaralhoUno } from "./BaralhoUno";
import { CartaUno } from "./Carta";
import { Computador, Humano } from "./Player";
import { MesaUno } from "./mesa";



// Criar a classe Carta com propriedades para cor (azul, amarelo, verde, vermelho) e valor
// (0-9, Comprar2, comprar4, Inverter, Bloquear).

// Criar a classe filha de Decks BaralhoUno contendo um array de CartaUno. Esta classe
// deverá ter métodos para criar o baralho inicial, embaralhar, comprar uma carta do topo e
// verificar se o baralho está vazio.

// Criar uma classe abstrata Jogador, com uma mão de cartas (array de CartaUno) e
// métodos para receber uma carta, jogar uma carta e verificar se tem cartas na mão.

// Criar a classe filha Humano com o método para o usuário escolher qual carta jogar.
// Criar a classe filha Computador que irá jogar uma carta válida.


// DESAFIO: Criar a classe Uno que irá gerenciar o fluxo do jogo, incluindo a criação dos
// jogadores, a distribuição inicial de cartas, o controle do turno, a pilha de descarte e a
// lógica para verificar se uma jogada é válida e determinar o vencedor.

let p1=new Humano();
let p2=new Computador();
let deck=new BaralhoUno();


let mesa1=new MesaUno([p1,p2],deck);

mesa1.Jogo()