import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import ColorBox from "./ColorBox";
import PaletteNavbar from "./PaletteNavbar";
import PaletteFooter from "./PaletteFooter";

import { generatePalette } from "../../utils/ColorPalette/colorHelper";
import palettes from "../../data/ColorPalette.data";
import "../../styles/ColorPalette/Palette.css";
import { Container } from "@material-ui/core";

class Palette extends Component {
    constructor(props) {
        super(props);

        let id = props.match.params.id;
        let palette = palettes.find((p) => p.id === id);
        if (palette) {
            this._props = { ...generatePalette(palette) };
        }
    }

    state = {
        format: "hex",
        level: 500,
    };

    changeFormat = (format) => this.setState({ format });

    changeLevel = (level) => this.setState({ level });

    renderColorBoxes = () => {
        const { level, format } = this.state;
        return this._props.colors[level].map((c) => (
            <ColorBox
                key={`${this._props.id}-${c.name}`}
                colorId={c.id}
                background={c[format]}
                name={c.name}
                seeMore={true}
            />
        ));
    };

    render() {
        if (!this._props) {
            return <Redirect to="/" />;
        }
        return (
            <Container className="Palette" maxWidth={false}>
                <PaletteNavbar
                    level={this.state.level}
                    format={this.state.format}
                    changeFormat={this.changeFormat}
                    changeLevel={this.changeLevel}
                />
                <div className="Palette-colors">{this.renderColorBoxes()}</div>
                <PaletteFooter
                    name={this._props.paletteName}
                    emoji={this._props.emoji}
                />
            </Container>
        );
    }
}

export default Palette;
