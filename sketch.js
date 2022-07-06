//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200; 
let diametro = 20;
let raio = diametro / 2;

//variaveis da raquete
let distanciaBorder = 5;
let distanciaY = 150;
let largura = 10;
let altura = 90;

//variaveis do son
let raquetada;
let ponto;
let trilha;

//variaveis de movimento
let velocidadeX = 6;
let velocidadeY = 6;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeOponenteY = 7;

let colidiu = false;

//placar jogo
let meuspontos = 0;
let pontosOponente = 0;


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  bolinha();
  movimentabolinha();
  verificaBordas();
  raquete(distanciaBorder, distanciaY);
  raquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  //colisaoRaquete();
  colisaoRaqueteBiblioteca(distanciaBorder,distanciaY);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa()
}
function raquete (x,y){
  rect(x, y, largura, altura );
}

function bolinha(){
  circle(xBolinha, yBolinha,
         diametro)
}

function movimentabolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}

function verificaBordas(){
  if(xBolinha + raio > width || xBolinha -raio < 0 ) {
    velocidadeX *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha -raio < 0) {
    velocidadeY *= -1;
  }
}
function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    distanciaY -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    distanciaY += 10
  }
}

function colisaoRaquete(){
  if(xBolinha - raio < distanciaBorder + largura && yBolinha - raio < distanciaY + altura &&  yBolinha + raio > distanciaY){
    velocidadeX *= -1;
    raquetada.play();
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, largura, altura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeX *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
    if(keyIsDown(87)){
    yRaqueteOponente -= 10
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10

  }
}
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16)
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);

}

function marcaPonto(){
  if (xBolinha > 590){
    meuspontos += 1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    Bolinha = 23;
    }
}