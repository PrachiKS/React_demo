import React from 'react'
import Child from './Child'

const Parent = ({data}) => {
  return (
    <Child data = {data}/>
  )
}

export default Parent