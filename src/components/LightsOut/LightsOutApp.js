import React from "react";

import Container from "@material-ui/core/Container";
import styles from "../../styles/LightsOut/LightsOut.styles";
import { withStyles } from "@material-ui/styles";
import Board from "./Board";

const LightsOutApp = ({ classes }) => {
    return (
        <Container className={classes.root} maxWidth={false}>
            <Board />
        </Container>
    );
};

export default withStyles(styles)(LightsOutApp);
