import React, { Component } from "react";
import Cell from "./Cell";
import "../../styles/LightsOut/Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.5,
    };
    constructor(props) {
        super(props);

        // TODO: set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard(),
        };

        this.flipCellsAround = this.flipCellsAround.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    createBoard() {
        let { nrows, ncols, chanceLightStartsOn } = this.props;
        let board = [];
        for (let row = 0; row < nrows; row++) {
            let row = [];
            for (let col = 0; col < ncols; col++) {
                let random = Math.random();
                row.push(random < chanceLightStartsOn ? true : false);
            }
            board.push(row);
        }
        return board;
    }

    playAgain() {
        this.setState({
            hasWon: false,
            board: this.createBoard(),
        });
    }

    /** handle changing a cell: update board & determine if winner */

    flipCellsAround(coord) {
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y, x) {
            // if this coord is actually on board, flip it

            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }

        // TODO: flip this cell and the cells around it
        flipCell(y, x);
        flipCell(y + 1, x);
        flipCell(y - 1, x);
        flipCell(y, x + 1);
        flipCell(y, x - 1);

        // win when every cell is turned off
        // TODO: determine is the game has been won
        let hasWon = true;
        for (let y = 0; y < nrows; y++) {
            for (let x = 0; x < ncols; x++) {
                if (board[y][x]) {
                    this.setState({ board, hasWon: false });
                    return;
                }
            }
        }

        this.setState({ board, hasWon });
    }

    /** Render game board or winning message. */

    renderCells = () => {
        return (
            <div>
                <div className="Board-title">
                    <span className="neon">LIGHT</span>
                    <span className="flux">OUT</span>
                </div>
                <table className="Board">
                    <tbody style={{ border: "none" }}>
                        {this.state.board.map((rows, y) => (
                            <tr key={y}>
                                {rows.map((c, x) => (
                                    <Cell
                                        key={y + "-" + x}
                                        id={y + "-" + x}
                                        isLit={c}
                                        x={x}
                                        y={y}
                                        flipCellsAround={this.flipCellsAround}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    renderYouWin = () => {
        return (
            <div>
                <div className="Board-title">
                    <span className="neon">YOU</span>
                    <span className="flux">WIN!!!</span>
                </div>
                <button className="Board-btn" onClick={this.playAgain}>
                    play again?
                </button>
            </div>
        );
    };

    render() {
        // if the game is won, just show a winning msg & render nothing else
        // TODO
        // make table board
        // TODO

        return (
            <div>
                {this.state.hasWon ? this.renderYouWin() : this.renderCells()}
            </div>
        );
    }
}

export default Board;
