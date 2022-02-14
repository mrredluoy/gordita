const $paso1=document.getElementById('paso1')
const $article=document.getElementById('article')
const $btnNext=document.getElementById('btnIZ')
const audio=document.getElementById('audio')

document.addEventListener('click',inicio)

const Array=['El amor es una experiencia universal que nos conmueve a todos, pero a veces no hallamos las palabras adecuadas para expresarlo. A lo largo de la historia los poetas han sabido decir aquello que todos sentimos de formas creativas y elocuentes.' ,'Por ello, en este artículo conoceremos una selección de treinta y siete poemas de amor cortos de poetas reconocidos, que pueden dar inspiración a cualquier corazón ansioso de expresarse.','El amor no llegó a ser un tema muy desarrollado por Antonio Machado, pero el poema a continuación es una de esas pocas, pero felices ocasiones en que el poeta le dedica su intención creadora. En el poema, el amante muestra su pasión y ansiedad ante el misterio del amor.' ,'El amor no se condiciona. Quien ama debe abrazar la totalidad del ser, el acierto y el error. Amar no es admiración y no hace casa en la buena suerte. El amor se decide o, simplemente, se da.']
console.log(Array)

function inicio(e){
// console.log(e.target.classList.contains('btn-inicio'))
if(e.target.classList.contains('btn-inicio')){
  audio.play()
  audio.loop =true;
  $paso1.style.display='none'  
  $article.innerHTML=`<div class="template center"><p> ${Array[0]}</p></div>`
  $btnNext.classList.remove('none')
}

if(e.target.classList.contains('uno')){
  $article.innerHTML=`<div class="template center"><p> ${Array[1]}</p></div>`
  $btnNext.classList.remove('uno')
  setTimeout(() => { $btnNext.classList.add('dos')},100);

}
if(e.target.classList.contains('dos')){
  $article.innerHTML=`<div class="template center"><p> ${Array[2]}</p></div>`
  $btnNext.classList.remove('dos')
  setTimeout(() => { $btnNext.classList.add('tres')},100);
}

if(e.target.classList.contains('tres')){
  $article.innerHTML=`<div class="template center"><p> ${Array[3]}</p></div>`
  $btnNext.classList.remove('tres')
  setTimeout(() => { $btnNext.classList.add('cuatro')},100);
}
if(e.target.classList.contains('cuatro')){
  $article.innerHTML=`<div class="template center"><p> ${Array[4]}</p></div>`
  $btnNext.classList.remove('cuatro')
  setTimeout(() => { $btnNext.classList.add('cinco')},100);
}
if(e.target.classList.contains('cinco')){
  $article.innerHTML=`<div class="template center"><video src="img/ipo.mp4" preload="auto" ></video></div>`
  $btnNext.classList.remove('cuatro')
  
}

}

