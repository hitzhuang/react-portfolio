import React from "react";
import { connect } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/ProjectDemo.styles";

import HangmanApp from "./Hangman/HangmanApp";
import LightsOutApp from "./LightsOut/LightsOutApp";
import DadJokesApp from "./DadJokes/DadJokesApp";
import ColorPaletteApp from "./ColorPalette/ColorPaletteApp";
import { setProjectDemoIndex } from "../redux/Project/actions";

const ProjectDemo = (props) => {
    const { classes, list, demoIndex, setProjectDemoIndex, fromRef } = props;
    const changeIndex = (e, page) => setProjectDemoIndex(page);
    const renderPage = (index) => {
        switch (index) {
            case 1:
                return <HangmanApp />;
            case 2:
                return <LightsOutApp />;
            case 3:
                return <DadJokesApp />;
            case 4:
                return <ColorPaletteApp />;
            default:
                return null;
        }
    };
    return (
        <div className={classes.root} ref={fromRef}>
            {renderPage(demoIndex)}
            <Pagination
                className={classes.menu}
                count={list.length}
                color="primary"
                size="large"
                page={demoIndex}
                onChange={changeIndex}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    demoIndex: state.project.index,
});

export default withStyles(styles)(
    connect(mapStateToProps, { setProjectDemoIndex })(ProjectDemo)
);
