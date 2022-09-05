
import { createStore } from 'redux';


const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo=text=>{
return{  type:ADD_TODO,text}
}

const deleteToDo=id=>{
return{type:DELETE_TODO,id}

}

const reducer = (state=[], action)=>{
  switch (action.type) {
    case ADD_TODO:
      //state.push(action.text)하지 않음 //과거의 state와 사로운 todo를 가지고 있게끔함.
      return [{text:action.text, id:Date.now()},...state]
      //새로운 상태를 create하고 그 새로운 state를 return해야한다//old state를 return하면 안된다
      //이전 배열의 컨텐츠로, 그리고 새로운 객체로 배열을 만들었다
    case DELETE_TODO:
      return []
  
    default:
      return state;
      
  }
}

const store = createStore(reducer);

//state를 change하지 않는다 우리가 mutate하는 것이다
store.subscribe(()=>console.log(store.getState()))

const dispatchAddToDo = (text)=>{
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo=(e)=>{
  const id = e.target.parentNode.id
  store.dispatch(deleteToDo(id))
}

const paintToDos=()=>{
  const toDos = store.getState();
  ul.innerHTML=""
  toDos.forEach(toDo=>{
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText="DEL"
    btn.addEventListener("click",dispatchDeleteToDo)
    li.id = toDos.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn)
  })
}

store.subscribe(paintToDos);



const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value = ""
  dispatchAddToDo(toDo);
}

form.addEventListener("submit",onSubmit);

