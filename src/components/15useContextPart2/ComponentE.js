import React, { useContext } from 'react'
import ComponentF from './ComponentF';
import { ChannelContext, UserContext } from './ComponentC';

function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      <div> Using useContext :  {user} - {channel} </div>
      <ComponentF />
    </div>
  )
}

export default ComponentE