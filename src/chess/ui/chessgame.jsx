import Board from '../asset/chessBoard.png'
import React from 'react'


class ChessGame extends React.Component{
    state={
        gameState:"",
        ddraggedPieceTargetId: "", // empty string means no piece is being dragged
        playerTurnToMoveIsWhite: true,
        whiteKingInCheck: false, 
        blackKingInCheck: false

    }
    
    render(){
        return <React.Fragment>
            <div style={{backgroundImage: `url(${Board})`,width:"720px",height:"720px"}}>
                
            </div>
        </React.Fragment>
    }

}
export default ChessGame