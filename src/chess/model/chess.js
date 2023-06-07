import chess from 'chess.js'
import ChessPiece from './chesspiece'
import Square from './square'

class Game {
    constructor(thisPlayersColorIsWhite){
        this.thisPlayerColorIsWhite=thisPlayersColorIsWhite//this will not change once intialized
        this.chessBoard= this.makeStartingBoard()
        this.chess= new chess()
        this.toCoord = thisPlayersColorIsWhite ? {
            0:8, 1:7, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1
        } : {
            0:1, 1:2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8
        }
        this.toAlphabet = thisPlayersColorIsWhite ? {
            0:"a", 1:"b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h"
        } : {
            0:"h", 1:"g", 2: "f", 3: "e", 4: "d", 5: "c", 6: "b", 7: "a"
        }
        this.toCoord2 = thisPlayersColorIsWhite ? {
            8:0, 7:1, 6: 2, 5: 3, 4: 4, 3: 5, 2: 6, 1: 7
        } : {
            1:0, 2:1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7
        }
        
        this.toAlphabet2 = thisPlayersColorIsWhite ? {
            "a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7
        } : {
            "h":0, "g":1, "f":2, "e":3, "d":4, "c":5, "b":6, "a":7
        }

        this.nQueens = 1
    }
     makeStartingBoard() {
        const backRank = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
        var startingChessBoard = []
        for (var i = 0; i < 8; i++) {
            startingChessBoard.push([])
            for (var j = 0; j < 8; j++) {
                // j is horizontal
                // i is vertical
                const coordinatesOnCanvas = [((j + 1) * 90 + 15), ((i + 1) * 90 + 15)]
                const emptySquare = new Square(j, i, null, coordinatesOnCanvas)
                
                startingChessBoard[i].push(emptySquare)
            }
        }
        const whiteBackRankId = ["wr1", "wn1", "wb1", "wq1", "wk1", "wb2", "wn2", "wr2"]
        const blackBackRankId = ["br1", "bn1", "bb1", "bq1", "bk1", "bb2", "bn2", "br2"]
        for (var j = 0; j < 8; j += 7) {
            for (var i = 0; i < 8; i++) {
                if (j === 0) {
                    // top
                    // console.log(backRank[i])
                    startingChessBoard[j][this.thisPlayersColorIsWhite ? i : 7 - i].setPiece(new ChessPiece(backRank[i], false, this.thisPlayersColorIsWhite ? "black" : "white", this.thisPlayersColorIsWhite ? blackBackRankId[i] : whiteBackRankId[i]))
                    startingChessBoard[j + 1][this.thisPlayersColorIsWhite ? i : 7 - i].setPiece(new ChessPiece("pawn", false, this.thisPlayersColorIsWhite ? "black" : "white", this.thisPlayersColorIsWhite ? "bp" + i : "wp" + i))
                } else {
                    // bottom
                    startingChessBoard[j - 1][this.thisPlayersColorIsWhite ? i : 7 - i].setPiece(new ChessPiece("pawn", false, this.thisPlayersColorIsWhite ? "white" : "black", this.thisPlayersColorIsWhite ? "wp" + i : "bp" + i))
                    startingChessBoard[j][this.thisPlayersColorIsWhite ? i : 7 - i].setPiece(new ChessPiece(backRank[i], false, this.thisPlayersColorIsWhite ? "white" : "black", this.thisPlayersColorIsWhite ? whiteBackRankId[i] : blackBackRankId[i]))
                }
            }
        }
        return startingChessBoard
    }

    getBoard() {
        return this.chessBoard
    }

    setBoard(newBoard) {
        this.chessBoard = newBoard
    }
}
export default Game

