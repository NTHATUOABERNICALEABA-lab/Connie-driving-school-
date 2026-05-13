// COUNTERS

const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

counter.innerText='0';

const updateCounter=()=>{

const target=+counter.getAttribute('data-target');

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=`${Math.ceil(current+increment)}`;

setTimeout(updateCounter,30);

}else{

counter.innerText=target;

}

};

updateCounter();

});

// BOOKING

function sendBooking(event){

event.preventDefault();

const name=document.getElementById('name').value;

const phone=document.getElementById('phone').value;

const packageType=document.getElementById('package').value;

const transmission=document.getElementById('transmission').value;

const date=document.getElementById('date').value;

const message=
`Hello Connie Driving School.

Name: ${name}
Phone: ${phone}
Package: ${packageType}
Transmission: ${transmission}
Date: ${date}`;

window.open(
`https://wa.me/26662112929?text=${encodeURIComponent(message)}`
);

}

// QUIZ

function checkAnswer(correct){

const result=document.getElementById('result');

if(correct){

result.innerHTML='Correct Answer ✅';
result.style.color='gold';

}else{

result.innerHTML='Wrong Answer ❌';
result.style.color='red';

}

}

// TIMER

let time=1800;

let timerStarted=false;

function startTimer(){

if(timerStarted) return;

timerStarted=true;

const timer=document.getElementById('timer');

const interval=setInterval(()=>{

let minutes=Math.floor(time/60);

let seconds=time%60;

seconds=seconds<10?'0'+seconds:seconds;

timer.innerHTML=`${minutes}:${seconds}`;

time--;

if(time<0){

clearInterval(interval);

timer.innerHTML='Lesson Finished';

}

},1000);

}