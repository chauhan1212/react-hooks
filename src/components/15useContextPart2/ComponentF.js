import React, { Component } from 'react'
import { ChannelContext, UserContext } from './ComponentC'

class ComponentF extends Component {
  render() {
    return (
      <UserContext.Consumer >
        {
          (username) => {
            return (
              <ChannelContext.Consumer>
                {
                  (channel) => {
                    return (
                      <div>Hello {username} and Channel  is {channel} </div>
                    )
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    )
  }
}

export default ComponentF