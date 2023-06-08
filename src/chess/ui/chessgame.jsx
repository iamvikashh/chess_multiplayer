import Board from '../asset/chessBoard.png'
import React from 'react'
import Game from '../model/chess'
import {Stage, Layer,Rect} from 'react-konva'
import Square from '../model/square'
import Piece from './piece'
import piecemap from './piecemap'




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
                    {this.state.gameState.getBoard().map((row) => {
                        return (<React.Fragment>
                                {row.map((square) => {
                                    if (square.isOccupied()) {                                    
                                        return (
                                            <Piece 
                                                x = {square.getCanvasCoord()[0]}
                                                y = {square.getCanvasCoord()[1]} 
                                                imgurls = {piecemap[square.getPiece().name]}
                                                isWhite = {square.getPiece().color === "white"}
                                                draggedPieceTargetId = {this.state.draggedPieceTargetId}
                                                onDragStart = {this.startDragging}
                                                onDragEnd = {this.endDragging}
                                                id = {square.getPieceIdOnThisSquare()}
                                                thisPlayersColorIsWhite = {this.props.color}
                                                playerTurnToMoveIsWhite = {this.state.playerTurnToMoveIsWhite}
                                                whiteKingInCheck = {this.state.whiteKingInCheck}
                                                blackKingInCheck = {this.state.blackKingInCheck}
                                                />)
                                    }
                                    return
                                })}
                            </React.Fragment>)
                    })}
                    </Layer>
                </Stage>
            </div>
        </React.Fragment>
    }

}
export default ChessGame