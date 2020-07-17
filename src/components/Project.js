import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AirplayRoundedIcon from "@material-ui/icons/AirplayRounded";
import useStyles from "../styles/Project.styles";
import { setProjectDemoIndex } from "../redux/Project/actions";

const Project = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => setExpanded(!expanded);
    const handleDemoClick = () => {
        props.setProjectDemoIndex(props.id);
        setTimeout(() => {
            props.toRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }, 500);
    };
    const { name, screen, desc, learns, credits } = props;
    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia className={classes.media} image={screen} title={name} />
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    className={classes.expand}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                    <Typography>More</Typography>
                </IconButton>
                <IconButton aria-label="take a look" onClick={handleDemoClick}>
                    <AirplayRoundedIcon />
                    <Typography>&nbsp;DEMO</Typography>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph color="secondary">
                        React:
                        <br />
                        {learns}
                    </Typography>
                    <Typography paragraph color="primary">
                        Credits:
                        <br />
                        {credits}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default connect(null, { setProjectDemoIndex })(Project);
