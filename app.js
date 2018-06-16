const playerName=document.querySelectorAll('h3');
const score=document.querySelectorAll('h1');
const dice=document.querySelector('img');
const round=document.querySelector('.round');
const take=document.querySelector('p');
const firstscreen=document.querySelector('.first');
const exit=document.querySelector('.fa-times');
const firstinput=document.querySelector('.firstplayer .firstinput');
const secondinput=document.querySelector('.secondplayer .secondinput');
const submit=document.querySelector('.submit');
const banner=document.querySelector('.banner')
var firstname=document.querySelector('.player .active');
var secondname=document.querySelector('.player .passive');
const winner=document.querySelector('.banner .winner')
const reset=document.querySelector('.banner h4')




var roundData=0
var playerData=[0, 0]
var active=0

//importuosim garsus
var sound=new Audio('pop.mp3')


playerName[active].classList.add('active')


dice.addEventListener('click', function(){

    var rand=Math.floor(Math.random()*6+1)

    sound.play();
    dice.src=`img/${rand}.png`
    //rand==1?roundData=0 : roundData+=rand;
    if(rand==1){
        roundData=0
        switchPlayer()
   }else{
    roundData+=rand
   }
    round.textContent=roundData
})

take.addEventListener('click', function(){
    if(roundData==0) return;
    switchPlayer()
})

function switchPlayer(){
    playerName[active].classList.remove('active')
    playerData[active]+=roundData
    score[active].textContent=playerData[active]
    roundData=0
    round.textContent=roundData
    if(playerData[active]>=10){
        banner.style.display='block'
        winner.textContent=`Žaidimą laimėjo ${playerName[active].textContent}`
        
    }
    active++
    if(active==2) active=0
    playerName[active].classList.add('active')
}

reset.addEventListener('click', function(){
    banner.style.display='none'
    playerData=[0,0]
})
//pasidaryt laimejimo banneri
//sunkus: padaryt banneri kad pradzioj leisti suvesti vardus ir iki kiek žaidziam
// jei du kartus is eiles išmeta du vienodus skaicius, gauna bonusa
// jei turi daugiau nei 80, tai kai 1 isridenam, visi taskai dingsta