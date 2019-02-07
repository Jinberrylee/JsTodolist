const clockConntainer = document.querySelector(".js-clock");//element의 자식 검
const clockTitle = clockConntainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}`:minutes
  }:${seconds < 10 ? `0${seconds}`:seconds
  }`;

    //객체안에 텍스트 넣${}
  //만약 초가 10보다 작으
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();

//setInterval 함수와 ,실행할 시간 간격
