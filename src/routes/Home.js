import React, { useState } from 'react'
import { connect } from 'react-redux'
import ToDo from '../components/ToDo'
import { actionCreator } from '../store'

//connect는 state나 dispatch 둘중에 고를 수 있음
//
//getState()는 state를 전달해줌
//dispatch는 store나 reducer에 메세지를 전달해줌

const Home = ({toDos,addToDo}) => {
  console.log(toDos,'홈에 있는 props')
   console.log(addToDo)

    const [text, setText] = useState("")
    const onChange=e=>{
        setText(e.target.value)
    }

    const onSubmit=e=>{
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    

  return (
    <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>ADD</button>
    </form>
    <ul>{toDos.map(toDo=> <ToDo {...toDo} key={toDo.id} />)}</ul>
    </>
  )
}

//getState()를 통해 state를 받는것~ 같은 느낌~~

//=getCurrentState
//state는 state! 리덕스 스토어에서 온 스테이트!
//ownProps?? ownProps는 컴포넌트의 props -> react router으로 부터 받은 props들
function mapStateToProps(state, ownProps){
  return {
    //redux state에서 home(component)에 prop으로써 전달한다!!!
    toDos:state
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    addToDo:text=>dispatch(actionCreator.addToDo(text))
  }
}

//connect : store와 component를 연결하는 방법
//mapStateToProps : connect의 첫번째 arument
//mapDispatchToProps : connect의 두번째 arument
//사용하지 않을 경우 ex).export default connect(null, mapDispatchToProps)(Home)로 사용한다.
export default connect(mapStateToProps, mapDispatchToProps)(Home)
