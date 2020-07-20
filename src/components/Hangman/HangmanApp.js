import React, { useState } from "react";
import Hangman from "./Hangman";
import { randomWord } from "../../data/Hangman.data";

import Container from "@material-ui/core/Container";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/Hangman/HangmanApp.styles";

const HangmanApp = ({ classes }) => {
    const [answer, setAnswer] = useState("apple");
    const restart = () => setAnswer(randomWord());
    return (
        <Container className={classes.root} maxWidth={false}>
            <Hangman
                answer={answer}
                maxWrong={answer.length}
                restart={restart}
            />
        </Container>
    );
};

export default withStyles(styles)(HangmanApp);
