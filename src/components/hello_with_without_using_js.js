import React from 'react'

const Hello=()=>{
    /* with using jsx
    return(
        <div>
            <h1>Hell0 sai teja!!!!</h1>
        </div>
    )
    */
   //without using jsx
   return React.createElement('div',{className:'container'},React.createElement('h1',null,'Hello Saiteja !!!!'))
}

export default Hello