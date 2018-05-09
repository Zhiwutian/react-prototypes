import React from "react";
import {Route} from "react-router-dom";
import OurMacarons from "./our_macarons";
import GiftsParties from "./gifts_parties";
import Contact from "./contact";
import Welcome from "./welcome";
import Nav from "./nav";

function App () {
    return (
        <div className="container">
            <Nav/>

            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons}/>
            <Route path="/gifts-and-parties" component={GiftsParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

export default App;