import { createStore } from "redux";

//store는 data를 넣는곳, state 넣는 곳

//여기서 state는 count!
//이 코드들의 유일한 목적은 count를 수정하기 위함!! 

//createStore라는 함수
//store가 하는 일은 기본적으로 data를 넣을 수 있는 장소를 생성한다
//리덕스는 data를 관리하는데 도와주는 역할을 하기 위해 만들어졌다

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//스토어 만들기

let count = 0;

number.innerText = count;

const updateText =()=>{
  number.innerText = count;
}

const handleAdd=()=>{
  count = count +1;
  updateText();
};
const handleMinus=()=>{
  count = count -1;
  updateText();
};



add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus)
