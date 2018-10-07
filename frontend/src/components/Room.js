import React from 'react'

class Room extends React.Component{
    render(){
        return(
            <div><p>Room:{this.props.match.params.room} Nickname:{this.props.match.params.username}</p></div>
        )
    }
}

export default Room;