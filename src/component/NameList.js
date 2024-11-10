import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id : 1,
            name : 'noor',
            age : 12,
            skill : 'react'
        },
        {
            id : 2,
            name : 'ayesha',
            age : 23,
            skill : 'Angular'
        },
        {
            id : 3,
            name : 'sana',
            age : 33,
            skill : 'Vue'
        },
    ];
  const personList =  persons.map(person=> <Person key="unique" Person={person}/>)
  return  <div>{personList} </div>
  
}

export default NameList