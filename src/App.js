import React from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import ProjectDemo from "./components/ProjectDemo";
import list from "./data/Project.data";

const App = () => {
    const cakeresume =
        "https://www.cakeresume.com/s--xsdQ1rioVY0dvThLuhajWA--/hitz";

    return (
        <div className="App">
            <Header cakeresume={cakeresume} />
            <ProjectList list={list} />
            <ProjectDemo list={list} />
            <Footer cakeresume={cakeresume} />
        </div>
    );
};

export default App;
