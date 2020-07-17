import React, { Component } from "react";
import JokeVote from "./JokeVote";
import JokeIcon from "./JokeIcon";
import "../../styles/DadJokes/Joke.css";

class Joke extends Component {
    render() {
        let { id, votes, content, like, unlike } = this.props;
        return (
            <tr className="Joke" width="100%">
                <td width="20%">
                    <JokeVote
                        id={id}
                        votes={votes}
                        like={like}
                        unlike={unlike}
                    />
                </td>
                <td width="70%" className="Joke-content">
                    {content}
                </td>
                <td width="10%">
                    <JokeIcon votes={votes} />
                </td>
            </tr>
        );
    }
}

export default Joke;
