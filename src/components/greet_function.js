import React from 'react'
/*
function Greet(){
    return <h1>Welcome to my world!!!</h1>
}
*/
/* 
//for single statements
export const Greet=()=><h1>Welcome to my world!</h1>
*/
//multiple statements
//usage of props
/*
export const Greet=(props)=>{
    console.log(props)
    return(<div>
<h1>Welcome to my world from {props.name} dsasa {props.heroname}!</h1>
{props.children}</div>)
}
*/
/*
export const Greet=({name,heroname})=>{

    return(<div>
<h1>Welcome to my world from {name} dsasa {heroname}!</h1></div>)
}
*/

export const Greet=props=>{
    const {name,heroname}=props
    return(<div>
<h1>Welcome to my world from {name} dsasa {heroname}!</h1></div>)
}
//export default Greet
