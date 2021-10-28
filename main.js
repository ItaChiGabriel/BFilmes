const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[animação-gabriel]');
const animationClass = 'animação';

function animeScroll() {
  const windowTop = window.pageYOffset + 699;
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })

}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 200));
}

// window.onload = function(){
//   const gabriel2 = document.getElementById('gabriel');
//   const player = document.getElementById('player')
//   gabriel2.addEventListener('click' ,function(){


//   })
// }

window.onload = function (){
  const musica = document.getElementById("audio");
  musica.play();

  const botão = document.getElementById("playpause")

botão.addEventListener("click", function(){
 
  if(!musica.classList.contains("stop")){
    musica.classList.add("stop")
    musica.pause()
  }else{
    musica.classList.remove("stop")
    musica.classList.add("play")
    musica.play()
  }

  if(botão.classList.toggle("lindo")){
    return false
  }

})
}


const botãoassistir = document.querySelector(".botãospacejam")

botãoassistir.addEventListener("click", function(){
  var videobtn = document.querySelector('.navvideo')


  if(videobtn){
    videobtn.style.display = "block"
     document.body.style.overflow = "hidden"
  }try{
console.log('ok')
  }catch (err){
console.log("Eroo:" + err)
  }
})






