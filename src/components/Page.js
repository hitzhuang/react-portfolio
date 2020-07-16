import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/Page.styles";

const Page = (props) => {
    const { classes, children } = props;
    return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Page);
