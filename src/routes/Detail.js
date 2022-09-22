import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'



const Detail = ({toDos}) => {
  const id = useParams().id;
  console.log(id)

const toDo = toDos.find(toDo=>toDo.id === parseInt(id))
console.log(toDo)

  return (
    <>
    <h1>{toDo?.text}</h1>
    <h5>Created at : {toDo?.id}</h5>
    </>
  )
}

function mapStateToProps(state,ownProps){
  // match 없어짐
  // const {
  //   match:{
  //     params:{id}
  //   }
  // } = ownProps;
  // return { toDo: state.find(toDo => toDo.id === parseInt(id))}
  return { toDos : state}
}

export default connect(mapStateToProps,null)(Detail)