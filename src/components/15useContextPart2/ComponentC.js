import React, { Component } from 'react'
import ComponentE from './ComponentE'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export class ComponentC extends Component {
  render() {
    return (
      <UserContext.Provider value={'vijay'}>
        <ChannelContext.Provider value={'chauhan'} >
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    )
  }
}

export default ComponentC