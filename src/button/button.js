import React from 'react'
import c from './button.module.css'

function Button(props) {
   return (
      <>
         <button id={props.id} className={`${c.button} button-block`}
         onClick={()=>props.OnClickFUNC(props.id)}></button>
      </>
   )
};

export default Button;