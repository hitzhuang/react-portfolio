import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

const styles = {
    root: {
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        color: "rgba(255,255,255,0.9)",
        border: "5px solid rgba(255,255,255,0.15)",
        margin: "40px auto 150px auto",
        overflow: "hidden",
        // backgroundColor: (props) => {
        //     if (props.label == "top") return "rgba(0,0,0,0.5)";
        // },
    },
    topBtn: {
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        color: "rgba(0,0,0,0.5)",
        border: "5px solid rgba(0,0,0,0.1)",
        margin: "20px auto",
        overflow: "hidden",
        // backgroundColor: (props) => {
        //     if (props.label == "top") return "rgba(0,0,0,0.5)";
        // },
    },
};

const NavButton = ({ classes, label }) => {
    if (label === "top")
        return <Button className={classes.topBtn}>{label}</Button>;
    return <Button className={classes.root}>{label}</Button>;
};

export default withStyles(styles)(NavButton);
