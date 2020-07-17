import React, { useRef } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import ProjectDemo from "./components/ProjectDemo";
import list from "./data/Project.data";

const App = () => {
    const cakeresume =
        "https://www.cakeresume.com/s--xsdQ1rioVY0dvThLuhajWA--/hitz";
    const exploreRef = useRef();
    const demoRef = useRef();

    return (
        <div className="App" id="containerElement">
            <Header cakeresume={cakeresume} toRef={exploreRef} />
            <ProjectList list={list} fromRef={exploreRef} toRef={demoRef} />
            <ProjectDemo list={list} fromRef={demoRef} />
            <Footer cakeresume={cakeresume} />
        </div>
    );
};

export default App;
