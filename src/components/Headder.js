import React from "react";

import logo from "../logo.svg";
import WavesContainer from "./BackgrounWaves";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/Header.styles";

const Main = ({ classes, cakeresume }) => {
    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <div className={classes.header}>
                    <img src={logo} className={classes.logo} alt="logo" />
                    <h3>Welcome to Hitz's React portfolio.</h3>
                    <span>
                        Hitz is a full-stack web/app developer. Current strength
                        coverage: 70% at fontend, 20% at backend, and 10% in
                        UI/UX design. In order to demonstrate and to master
                        higher frontend skill set, he is transforming his
                        professional level from JavaScript, jQuery into Reactjs.
                    </span>
                    <br /> <br />
                    <span>
                        This website is also made using Reactjs. If you have any
                        question or would be insterested in hiring Hitz, please
                        contact him at{" "}
                        <a
                            href={cakeresume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CakeResume.
                        </a>
                    </span>
                </div>
                <Button className={classes.exploreBtn}>Explore</Button>
            </Container>
            <WavesContainer />
        </div>
    );
};

export default withStyles(styles)(Main);
