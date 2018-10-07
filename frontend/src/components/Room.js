import React from 'react'

var roomData;

class Room extends React.Component {
    componentDidMount() {
        fetch("http://localhost:8000/api/rooms/"+this.props.match.params.roomID, {})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    result.map(function (item) {
                        roomData={
                            text: item.text,
                            value: item.id,
                        }
                    })
                },
            )
        console.log(roomData);
    }

    render() {
        return (
            <div><p>Room:{this.props.match.params.roomID} Nickname:{this.props.match.params.username}</p></div>
        )
    }
}

export default Room;