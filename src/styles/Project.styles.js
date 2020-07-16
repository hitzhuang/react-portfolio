import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "30px",
        fontSize: "14pt",
        boxShadow: "0px 0px 5px lightgrey",
        backgroundColor: "rgb(248,248,248)",
    },
    content: {
        padding: "25px",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginRight: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

export default useStyles;
