import React, { useState } from 'react'
import Modal1 from './Modal1'

const Carts = ({el}) => {
  const [show, setshow] = useState(false)
  return (
    <div className='cart'>
        {show==true?<Modal1 el={el} setshow={setshow}/>:null}
    <img src={el.image} />
    <button onClick={()=>setshow(true)}>CLICK</button>
    </div>
  )
}

export default Carts
