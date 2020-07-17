import React, { Component } from "react";
import MiniPalette from "./MiniPalette";

import Grid from "@material-ui/core/Grid";

class PaletteList extends Component {
    render() {
        return (
            <div className="PaletteList">
                <Grid container spacing={4}>
                    {this.props.palettes.map((p) => (
                        <Grid key={p.id} item sm={4} xs={12}>
                            <MiniPalette {...p} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default PaletteList;
