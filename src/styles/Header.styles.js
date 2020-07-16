const styles = {
    root: {
        position: "relative",
        background: `linear-gradient(60deg, 
                        rgba(84, 58, 183, 1) 0%, 
                        rgba(0, 172, 193, 1) 100%)`,
        color: "white",
        overflowX: "hidden",
        textAlign: "center",

        "& a": {
            color: "#61dafb",
        },
    },
    header: {
        fontSize: "14pt",
        lineHeight: "20pt",
        textAlign: "left",
    },
    logo: {
        minWidth: "40vmin",
        pointerEvents: "none",
        margin: "40px auto 0px auto",
        animation: "$logoSpin infinite 20s linear",
    },
    exploreBtn: {
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        color: "rgba(255,255,255,0.9)",
        border: "5px solid rgba(255,255,255,0.15)",
        margin: "40px auto 150px auto",
        overflow: "hidden",
    },
    "@keyframes logoSpin": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
    },
};

export default styles;
