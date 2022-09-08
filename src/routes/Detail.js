import React, { useState } from 'react'

const Detail = () => {

    const [names, setNames] = useState(['홍길동','김민수'])
    const [input, setinput] = useState('')

    const handleInputChange=(e)=>{
        setinput(e.target.value)
    }

    const handleUpload=()=>{
        setNames((prevState)=>{
            return [input,...prevState]
        })
    }

    console.log(input)

  return (
    <div>
        <input type="text" value={input} onChange={handleInputChange}/>
        <button onClick={handleUpload}>Upload</button>
        {names.map((name,idx)=>{
            return <p key={idx}>{name}</p>
        })}
    </div>
  )
}

export default Detail