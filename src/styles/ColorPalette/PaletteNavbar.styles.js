const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "5vh",
    },
    logo: {
        padding: "0 20px",
        fontSize: "20px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        },
    },
    slider: {
        display: "flex",
        alignItems: "center",
        "& .MuiTypography-root": {
            padding: "0px 20px",
        },
        "& .MuiSlider-root": {
            width: 250,
        },
        "& .MuiSlider-thumb": {
            width: "16px",
            height: "16px",
            marginTop: "-7px",
        },
        "& .MuiSlider-thumbColorPrimary": {
            color: "green",
        },
    },
    select: {
        marginLeft: "auto",
        marginRight: "20px",
    },
};

export default styles;
