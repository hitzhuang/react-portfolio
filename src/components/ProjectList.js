import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";

import Project from "./Project";
import list from "../data/Project.data";

import "../styles/ProjectList.styles.css";

const ProjectList = () => (
    <Container className="ProjectList" maxWidth="md">
        <Grid container spacing={3}>
            {list.map((p) => (
                <Grid key={p.id} item lg={6} md={6} sm={6} xs={12}>
                    <Project {...p} />
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default ProjectList;
