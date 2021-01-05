import React, { Component } from 'react'
import Person from './Person'

function NameList() {
 const places=['delhi','hyderabad','rajam','rajam']
 const persons=[
     {
         id:1,
         name:'saiteja',
         college:'gmrit',
         degree:'btech'
     },
     {
         id:2,
         name:'hariteja',
         college:'gmrit',
         degree:'btech'
     },
     {
         id:3,
         name:'vaishu',
         college:"gvpe",
         degree:'btech'
     },
     {
        id:4,
        name:'divya',
        college:'mvrg',
        degree:'mba'
     }
 ]
 const placeList=places.map((place,index)=><h2 key={index}>{index}.{place}</h2>)
 const personsList=persons.map(person=>(<Person key={person.id} person={person}></Person>))
 return(
     <div>
       {placeList}
        
     </div>
     /*
     <div>{
         places.map(place => <h1>{place}</h1>)
     }</div>
     */
        /* <h1>{places[0]}
     </h1>
     <h1>
         {places[1]}
     </h1>
     <h1>
         {places[2]}
     </h1>*/
     
 )
}
export default NameList