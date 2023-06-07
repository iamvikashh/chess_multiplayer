import Board from '../asset/chessBoard.png'
import React from 'react'
import Game from '../model/chess'
import {Stage, Layer } from 'react-konva'
import Square from '../model/square'


class ChessGame extends React.Component{
    state={
        gameState:new Game(true),
        ddraggedPieceTargetId: "", // empty string means no piece is being dragged
        playerTurnToMoveIsWhite: true,
        whiteKingInCheck: false, 
        blackKingInCheck: false
    }
    
    render(){
        return <React.Fragment>
            <div style={{backgroundImage: `url(${Board})`,width:"720px",height:"720px"}}>
                <Stage width = {720} height = {720}>
                    <Layer> 
                        <React.Fragment>
                      
                        </React.Fragment>
                        
                        
                    </Layer>
                </Stage>
            </div>
        </React.Fragment>
    }

}
export default ChessGame