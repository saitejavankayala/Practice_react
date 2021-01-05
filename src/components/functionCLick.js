import React from 'react'

function Functionclick(){
   function clickHandler(){
        console.log("Click event handling")
    }
    return(
        <div>
            <button onClick={clickHandler}>Function click</button>
        </div>
    )
}
export default Functionclick