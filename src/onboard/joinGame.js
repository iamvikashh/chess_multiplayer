import { socket } from "../connection/socket"
import React from 'react'
import { useParams } from 'react-router-dom'

const JoinGameRoom =(gameId,userName,isCreator)=>{
    const idData = {
        gameId : gameId,
        userName : userName,
        isCreator: isCreator
    }
    socket.emit("playerJoinGame", idData)
}

  
const JoinGame = (props) => {
    /**
     * Extract the 'gameId' from the URL. 
     * the 'gameId' is the gameRoom ID. 
     */
    const { gameid } = useParams()
    JoinGameRoom(gameid, props.userName, props.isCreator)
    return <div>
        <h1 style = {{textAlign: "center"}}>Welcome to Chess with Friend!</h1>
    </div>
}

export default JoinGame