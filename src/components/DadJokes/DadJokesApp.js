import React from "react";
import JokesBox from "./JokesBox";

import Container from "@material-ui/core/Container";
import styles from "../../styles/DadJokes/DadJokes.styles";
import { withStyles } from "@material-ui/styles";

const DadJokesApp = ({ classes }) => {
    return (
        <Container className={classes.root} maxWidth={false}>
            <JokesBox />
        </Container>
    );
};

export default withStyles(styles)(DadJokesApp);
