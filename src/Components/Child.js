import React from 'react'
import Grandchild from './Grandchild'

const Child = ({data}) => {
  return (
    <Grandchild data = {data}/>
  )
}

export default Child
