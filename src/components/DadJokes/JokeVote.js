import React, { Component } from "react";
import "../../styles/DadJokes/JokeVote.css";

class JokeVote extends Component {
    getColor = () => {
        if (this.props.votes >= 15) {
            return "#4CAF50";
        } else if (this.props.votes >= 12) {
            return "#8BC34A";
        } else if (this.props.votes >= 9) {
            return "#CDDC39";
        } else if (this.props.votes >= 6) {
            return "#FFEB3B";
        } else if (this.props.votes >= 3) {
            return "#FFC107";
        } else if (this.props.votes >= 0) {
            return "#FF9800";
        } else {
            return "#f44336";
        }
    };

    handleVoteDown = () => {
        this.props.unlike(this.props.id);
    };

    handleVoteUp = () => {
        this.props.like(this.props.id);
    };

    render() {
        let { votes } = this.props;
        return (
            <div className="JokeVote">
                <i
                    className="far fa-thumbs-down"
                    onClick={this.handleVoteDown}
                ></i>
                <span
                    className="JokeVote-votes"
                    style={{ borderColor: this.getColor() }}
                >
                    {votes > 99 ? 99 : votes}
                </span>
                <i className="far fa-thumbs-up" onClick={this.handleVoteUp}></i>
            </div>
        );
    }
}

export default JokeVote;
