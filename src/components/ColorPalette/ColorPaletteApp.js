import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";

const ColorPaletteApp = () => {
    return (
        <Switch>
            <Route
                exact
                path="/palette/:id"
                render={(props) => <Palette {...props} />}
            />
            <Route
                exact
                path="/palette/:id/:colorId"
                render={(props) => <SingleColorPalette {...props} />}
            />
            <Route exact path="/" render={() => <Main />} />
            <Redirect to="/" />
        </Switch>
    );
};

export default ColorPaletteApp;
