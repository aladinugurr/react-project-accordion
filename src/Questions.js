import React from 'react';
import { useState } from 'react';
import './index.css'

function Questions({title,info}) {
    const [show , setShow] = useState(false);
  return (
    <>
        <article  className='question'>
                      <header>
                 <h4>{title}</h4>
                 <button className='btn' onClick={()=>setShow(!show)}>                
                {show ? '-' : '+'}       
            </button>
            </header>
               <p>{show ? info : ''}</p>   
              </article >
    </>
  )
}

export default Questions