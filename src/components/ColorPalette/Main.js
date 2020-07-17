import React from "react";

import PaletteList from "./PaletteList";
import palettes from "../../data/ColorPalette.data";

import Container from "@material-ui/core/Container";

import styles from "../../styles/ColorPalette/Main.styles";
import { withStyles } from "@material-ui/styles";

const Main = ({ classes }) => {
    return (
        <Container className={classes.root} maxWidth={false}>
            <Container maxWidth="md">
                <header>
                    <div className={classes.logo}>Color Palette</div>
                </header>
                <PaletteList palettes={palettes} />
            </Container>
        </Container>
    );
};

export default withStyles(styles)(Main);
