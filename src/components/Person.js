import React from 'react'

function Person({person,key}){
    return(
        <div>
            <h2>My id {person.id}. My name is {person.name}. My btech is {person.college}. My degree is {person.degree}</h2>
        </div>
    )
}
export default Person