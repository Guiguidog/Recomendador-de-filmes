// idade 14 anos
// Desencanto

// Idade: 10 anos
// ICarly

// Idade: 18 anos
// Deadpool

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput()
}

function draw() {
  background('blue');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('white');

let idade = campoIdade.value();

let filme = geraRecomendaçao(idade);

text(filme, width/2, height/2 );
}

function geraRecomendaçao(idade){
  if(idade >=18){
    return 'Deadpool'
  } else if (idade >= 14){
    return 'Desencanto'
  } else if (idade >=10){
    return 'ICarly'
  } else {
    return "Peppa Pig"
  }
  
}
