
import { createStore } from 'redux';

const ADD = "ADD"
const DELETE = "DELETE";

 const addToDo= text=>{
    return{
        type:ADD,
        text
    }
}

 const deleteToDo =id=>{
    return{
        type:DELETE,
        id: parseInt(id)
    }
}

export const actionCreator = {
    addToDo,
    deleteToDo
}

const reducer =(state=[], action)=>{
    switch (action.type) {
        case ADD:
            return [{ text:action.text, id:Date.now()}, ...state]
        case DELETE:
            return state.filter(toDo=> toDo.id!==action.id);
        default:
           return state;
    }
}

const store = createStore(reducer);

//react-redux : store의 변동사항에 대해 subscribe하기 원하고 모든게 다시 render되기를 원해서 쓴다.


export default store;