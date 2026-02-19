import React, { useContext } from 'react'
import {Data} from "../App"


const Grandchild = () => {

const Empdata = useContext(Data);    
  return (
    <>
        <h1>GrandChild</h1>
        {Empdata.map((item) => {
            return (
                <>
                    <h2>{item.name}</h2>
                    <h2>{item.age}</h2>
                </>
            )
        })}
    </>
  )
}

export default Grandchild
