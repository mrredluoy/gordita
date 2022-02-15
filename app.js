const $paso1=document.getElementById('paso1')
const $article=document.getElementById('article')
const $btnNext=document.getElementById('btnIZ')
const audio=document.getElementById('audio')

document.addEventListener('click',inicio)

const Array=['Hola mi gordita no sabes lo feliz que soy al tenerte  ami lado,ha pasado mucho tiempo para darme cuenta q siempre estuviste ahi ,me apoyaste cuando lo necesite' ,'Nose como paso  pero  	&#322;&#322;egaste a enomorarme ,quiero decirte  que tu eres  la primera persona y la ultima  en quien  pienso en mis dias','estoy tan agradecido de encontrarme contigo ,pense  ya no confiar en nadie pero tu ,siendo solo tu,te ganaste mi corazon me hiciste sentir esas mariposas, y esos suspiros  cursis como dices ,con tu delicadeza ,tu sencilles, tu carinio  y tu hermosura','te admiro eres una valiente y maravillosa mujer. Eres muy especial para mi y  no te are promesas falsas ,pero siempre dare lo mejor de mi  para  que tu y yo estemos bien.','💗💗TE QUIERO💗💗💗 ','FELIZ SAN VALENTIN   MI   GORDITA💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗att:Youlber']
console.log(Array)

function inicio(e){
// console.log(e.target.classList.contains('btn-inicio'))
if(e.target.classList.contains('btn-inicio')){
  audio.play()
  audio.loop =true;
  $paso1.style.display='none'  
  $article.innerHTML=`<div class="template"><p> ${Array[0]}</p></div>`
  $btnNext.classList.remove('none')
}

if(e.target.classList.contains('uno')){
  $btnNext.style.backgroundColor='#FFBBBB'
  $article.innerHTML=`<div class="template"><p> ${Array[1]}</p></div>`
  $btnNext.classList.remove('uno')
  setTimeout(() => { $btnNext.classList.add('dos');$btnNext.style.backgroundColor='	#FFFFFF'},100);

}
if(e.target.classList.contains('dos')){
  $btnNext.style.backgroundColor='#FFBBBB'
  $article.innerHTML=`<div class="template"><p lang="es"> ${Array[2]}</p></div>`
  $btnNext.classList.remove('dos')
  setTimeout(() => { $btnNext.classList.add('tres');$btnNext.style.backgroundColor='	#FFFFFF'},100);
}

if(e.target.classList.contains('tres')){
  $btnNext.style.backgroundColor='#FFBBBB'
  $article.innerHTML=`<div class="template "><p> ${Array[3]}</p></div>`
  $btnNext.classList.remove('tres')
  setTimeout(() => { $btnNext.classList.add('cuatro');$btnNext.style.backgroundColor='	#FFFFFF'},100);
}
if(e.target.classList.contains('cuatro')){
  $btnNext.style.backgroundColor='#FFBBBB'
  $article.innerHTML=`<div class="template "><p> ${Array[4]}</p></div>`
  $btnNext.classList.remove('cuatro')
  setTimeout(() => { $btnNext.classList.add('cinco');$btnNext.style.backgroundColor='	#FFFFFF'},100);
}
if(e.target.classList.contains('cinco')){
  $btnNext.style.backgroundColor='#FFBBBB'
  $article.innerHTML=`<div class="template "><p> ${Array[5]}</p></div>`
  $btnNext.classList.remove('cinco')
  setTimeout(() => { $btnNext.classList.add('seis');$btnNext.style.backgroundColor='	#FFFFFF'},100);
  $btnNext.textContent='Inicio'
  
}
if(e.target.classList.contains('seis')){
  $btnNext.style.backgroundColor='#FFBBBB'
  
  setTimeout(() => {$btnNext.style.backgroundColor='	#FFFFFF'},100);
  setTimeout(() => {location.reload()},500);
 
  
}

}

