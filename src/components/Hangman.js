import React, { Component } from "react";
import "../styles/Hangman.css";
import img0 from "../images/hangman/0.jpg";
import img1 from "../images/hangman/1.jpg";
import img2 from "../images/hangman/2.jpg";
import img3 from "../images/hangman/3.jpg";
import img4 from "../images/hangman/4.jpg";
import img5 from "../images/hangman/5.jpg";
import img6 from "../images/hangman/6.jpg";

class Hangman extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 6,
        answer: "apple",
        images: [img0, img1, img2, img3, img4, img5, img6],
    };

    constructor(props) {
        super(props);
        this.state = { nWrong: 0, guessed: new Set() };
        this.handleGuess = this.handleGuess.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    /* guessedWord: show current-state of word:
     * if guessed letters are {a,p,e}, show "app_e" for "apple"
     */
    guessedWord() {
        return this.props.answer
            .split("")
            .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
    }

    /** handleGuest: handle a guessed letter:
     * - add to guessed letters
     * - if not in answer, increase number-wrong guesses
     */
    handleGuess(evt) {
        let ltr = evt.target.value;
        this.setState((st) => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (this.props.answer.includes(ltr) ? 0 : 1),
        }));
    }

    handleRestart(evt) {
        this.setState({
            nWrong: 0,
            guessed: new Set(),
        });
        this.props.restart();
    }

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
            <button
                key={"btn_" + index}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    }

    isGameOver = () => {
        const { nWrong } = this.state;
        const { maxWrong } = this.props;
        return nWrong >= maxWrong;
    };

    isWin = () => {
        if (this.guessedWord().includes("_")) return false;
        return true;
    };

    /** render: render game */
    render() {
        const { nWrong } = this.state;
        const { maxWrong } = this.props;
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                {/* image */}
                {nWrong <= maxWrong ? (
                    <img
                        src={this.props.images[nWrong]}
                        alt={`${nWrong}/${maxWrong} wrong guesses`}
                    />
                ) : null}

                {/* guessing status */}
                {nWrong > 0 && (
                    <div style={{ color: "red" }}>wrong guesses: {nWrong}</div>
                )}

                {/* answer */}
                <p className="Hangman-word">
                    {!this.isGameOver()
                        ? this.guessedWord()
                        : this.props.answer}
                </p>

                {/* buttons */}
                {!this.isGameOver() && !this.isWin() && (
                    <p className="Hangman-btns">{this.generateButtons()}</p>
                )}

                {/* You Lose */}
                {this.isGameOver() && (
                    <h1 style={{ color: "red" }}>You Lose!!!</h1>
                )}

                {/* You Win */}
                {this.isWin() && <h1 style={{ color: "green" }}>You Win!!!</h1>}

                {/* restart button */}
                <div>
                    <button
                        style={{ width: "260px" }}
                        onClick={this.handleRestart}
                    >
                        restart?
                    </button>
                </div>
            </div>
        );
    }
}

export default Hangman;
