import io from  'socket.io-client'
import url from 'socket.io-client/lib/url'

const URL ='http://localhost:8000'

const socket = io(url)

var mySocketId

socket.on("createNewGame",statusUpdate =>{
    console.log("A new game has been created! Username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId)
    mySocketId = statusUpdate.mySocketId
})

export {socket,mySocketId}