import React from "react";
import { Redirect } from "react-router-dom";

import "../../styles/ColorPalette/Palette.css";
import Palette from "./Palette";
import ColorBox from "./ColorBox";
import ColorBoxBackBtn from "./ColorBoxBackBtn";
import PaletteNavbar from "./PaletteNavbar";
import PaletteFooter from "./PaletteFooter";

import { generatePalette } from "../../utils/ColorPalette/colorHelper";
import palettes from "../../data/ColorPalette.data";
import { Container } from "@material-ui/core";

class SingleColorPalette extends Palette {
    constructor(props) {
        super(props);

        let id = props.match.params.id;
        let colorId = props.match.params.colorId;
        let palette = palettes.find((p) => p.id === id);
        if (palette) {
            let colors = generatePalette(palette).colors;
            let shades = [];
            for (let key in colors) {
                if (key !== "0") {
                    shades.push(colors[key].find((c) => c.id === colorId));
                }
            }
            this._props = {
                shades,
                paletteName: palette.paletteName,
                emoji: palette.emoji,
            };
        }
    }

    renderColorBoxes = () => {
        const { format } = this.state;
        return this._props.shades.map((c) => (
            <ColorBox
                key={`${this._props.id}-${c.name}`}
                colorId={c.id}
                background={c[format]}
                name={c.name}
                seeMore={false}
            />
        ));
    };

    render() {
        if (!this._props) {
            return <Redirect to="/" />;
        }
        return (
            <Container className="Palette SingleColorPalette" maxWidth={false}>
                <PaletteNavbar
                    level={this.state.level}
                    format={this.state.format}
                    changeFormat={this.changeFormat}
                />
                <div className="Palette-colors">
                    {this.renderColorBoxes()}
                    <ColorBoxBackBtn />
                </div>
                <PaletteFooter
                    name={this._props.paletteName}
                    emoji={this._props.emoji}
                />
            </Container>
        );
    }
}

export default SingleColorPalette;
