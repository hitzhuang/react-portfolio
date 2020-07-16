export default [
    {
        id: 1,
        name: "Hangman",
        level: "basic",
        desc: `Hangman is a mini-game in which you have 6 chances to guess 5~6 characters of a word.
             If you run out of chances, a man is "hanged", and you lose a game. 
             You may restart to play, but the previous guessing word will be changed.`,
        learns: `The React state patterns and events are applied for the mini-game. 
             This is a basic practice of coding using React.`,
        credits:
            "The Modern React Bootcamp (Hooks, Context, NextJS, Router) from Colt Steele @Udemy",
        screen: "/lights_out.png",
        link: "",
    },
    {
        id: 2,
        name: "Lights Out",
        level: "basic",
        desc: `Lights Out is a classical game released by Tiger Electronics in 1995.
            The game consists of a 5 by 5 grid of lights. Pressing any of the lights will toggle it and the 
            adjacent lights. The goal of the puzzle is to switch all the lights off as fewer clicks as possible.`,
        learns: `The React state patterns and events are applied for the mini-game. The challenging part is
            the algorithm behind the scene. This is another example of basic practice of coding using React.`,
        credits:
            "The Modern React Bootcamp (Hooks, Context, NextJS, Router) from Colt Steele @Udemy",
        screen: "/lights_out.png",
        link: "",
    },
    {
        id: 3,
        name: "Dad Jokes",
        level: "medium",
        desc: `Dad Jokes is a mini app that fetching jokes from "icanhazdadjoke" website.
            There will be 10 jokes initially. You can vote to like or dislike a joke, so the ranking 
            and also the status of icons based on the votes will be changed. If you like, you may press 
            the download button to have more jokes and fun!`,
        learns: `Understanding the React lifecycle is very important! It's the way to manage and to control 
            components. Use "ComponentWillMount" for class based components (or "useEffect" for functional components)
            to make an axios restful api call and then to render the content.`,
        credits:
            "The Modern React Bootcamp (Hooks, Context, NextJS, Router) from Colt Steele @Udemy",
        screen: "/lights_out.png",
        link: "",
    },
    {
        id: 4,
        name: "Color Palette",
        desc: `Color Palette is a useful tool to design colors and to copy a desired color code to clipboard. 
            Three formats are suported, which are HEX, RGB, and RGBA. You can fine tune a massive luminance of colors
            by adjusting the color slider. Single color palette is also provided for having more range colors of choice.`,
        learns: `React Router is the final piece of the basic learning in React. It's the key to make an app navigation works.`,
        credits:
            "The Modern React Bootcamp (Hooks, Context, NextJS, Router) from Colt Steele @Udemy",
        screen: "/lights_out.png",
        link: "",
    },
];
