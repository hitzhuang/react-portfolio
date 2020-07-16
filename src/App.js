import React from "react";

import Headder from "./components/Headder";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
    const cakeresume =
        "https://www.cakeresume.com/s--xsdQ1rioVY0dvThLuhajWA--/hitz";
    return (
        <div className="App">
            <Headder cakeresume={cakeresume} />
            <ProjectList />
            <Footer cakeresume={cakeresume} />
        </div>
    );
}

export default App;
