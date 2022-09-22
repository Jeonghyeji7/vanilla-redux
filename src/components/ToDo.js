import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreator } from '../store'

const ToDo = ({text, onButtonClick, id}) => {
  return (
    <li>
      <Link to={`${id}`}>
        {text} <button onClick={onButtonClick}>❌</button>
        </Link>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps){
  // console.log(ownProps,'ownProps')
 return{
  onButtonClick:()=>dispatch(actionCreator.deleteToDo(ownProps.id))
 }
}

export default connect(null,mapDispatchToProps)(ToDo)