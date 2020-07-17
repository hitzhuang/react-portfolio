import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "../../styles/DadJokes/JokesBox.css";

class JokesBox extends Component {
    static defaultProps = {
        limit: 10,
    };

    state = {
        jokes: [],
        currentPage: 0,
        loading: true,
    };

    componentDidMount() {
        this.fetchJokes(this.state.currentPage + 1);
    }

    fetchJokes = (pageIndex) => {
        this.setState({ loading: true });
        axios
            .get("https://icanhazdadjoke.com/search", {
                params: {
                    page: pageIndex,
                    limit: this.props.limit,
                },
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                let { jokes } = this.state;
                let newJokes = response.data.results.map((j) => {
                    return { id: j.id, content: j.joke, votes: 0 };
                });
                let uniquekeys = [];
                let uniqueJokes = [...jokes, ...newJokes].filter((j) => {
                    if (!uniquekeys[j.id]) {
                        uniquekeys[j.id] = true;
                        return true;
                    } else {
                        return false;
                    }
                });
                this.setState({ currentPage: pageIndex, loading: false });
                this.refreshJokes(uniqueJokes);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    handleFetch = (e) => {
        this.fetchJokes(this.state.currentPage + 1);
    };

    refreshJokes = (jokes) => {
        this.setState({
            jokes: [...jokes.sort((a, b) => b.votes - a.votes)],
        });
    };

    like = (id) => {
        let { jokes } = this.state;
        let index = jokes.findIndex((j) => j.id === id);
        if (jokes[index]) {
            jokes[index].votes++;
        }
        this.refreshJokes(jokes);
    };

    unlike = (id) => {
        let { jokes } = this.state;
        let index = jokes.findIndex((j) => j.id === id);
        if (jokes[index]) {
            jokes[index].votes--;
        }
        this.refreshJokes(jokes);
    };

    renderJokes = () => {
        return this.state.jokes.map((joke) => (
            <Joke
                key={joke.id}
                id={joke.id}
                votes={joke.votes}
                content={joke.content}
                like={this.like}
                unlike={this.unlike}
            />
        ));
    };

    renderJokeBox = () => {
        return (
            <div className="JokesBox-container">
                <div className="JokesBox-sidebar">
                    <h1 className="JokesBox-sidebar-title">
                        <span>Dad</span> JOKES
                    </h1>
                    <img
                        alt="cheezjokes"
                        src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
                    />
                    <button onClick={this.handleFetch}>New Jokes</button>
                </div>
                <div className="JokesBox-jokes">
                    <table>
                        <tbody>{this.renderJokes()}</tbody>
                    </table>
                </div>
                <div className="JokesBox-rightbar"></div>
            </div>
        );
    };

    renderLoading = () => {
        return (
            <div className="JokesBox-loading">
                <i className="far fa-8x fa-laugh fa-spin" />
                <h3>LOADING...</h3>
            </div>
        );
    };

    render() {
        return (
            <div className="JokesBox">
                {this.state.loading
                    ? this.renderLoading()
                    : this.renderJokeBox()}
            </div>
        );
    }
}

export default JokesBox;
