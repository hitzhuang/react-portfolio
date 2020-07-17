import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/ColorPalette/MiniPalette.css";

class MiniPalette extends Component {
    render() {
        const { id, colors } = this.props;
        return (
            <div className="MiniPalette">
                <Link to={`/palette/${id}`}>
                    <div className="MiniPalette-colors">
                        {colors.map((c, i) => (
                            <div
                                className="MiniPalette-color"
                                key={`MiniPalette-${id}-${i}`}
                                style={{ backgroundColor: c.color }}
                            ></div>
                        ))}
                    </div>
                    <div className="MiniPalette-footer">
                        {this.props.paletteName}
                        <span className="MiniPalette-emoji">
                            {this.props.emoji}
                        </span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default MiniPalette;
