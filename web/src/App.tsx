import React, { useState, useEffect } from "react";

import Menu from "./components/menu";
import Artists from "./pages/artists";
import Albums from "./pages/albums";
import Songs from "./pages/songs";
import Play from "./pages/play";


import { BrowserRouter, Route, Switch } from "react-router-dom";
import { 
  HOME,
  ARTISTS,
  ALBUMS,
  SONGS,
  PLAY
 } from "./routes";

import "./assets/sass/general.sass";
import "./assets/css/navbar.css";
import "./assets/css/slick.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/venobox.css";
import "./assets/css/navbar.css";
import "./assets/css/navbutton.css";
import "./assets/css/banner.css";
import "./assets/css/festiveslider.css";
import "./assets/css/shedule.css";
import "./assets/css/upcoming.css";
import "./assets/css/gallery.css";
import "./assets/css/event.css";
import "./assets/css/pricing.css";
import "./assets/css/sponsor.css";
import "./assets/css/about-page.css";
import "./assets/css/pricingpahe.css";
import "./assets/css/sponsorpage.css";
import "./assets/css/comingsoon.css";
import "./assets/css/error-page.css";
import "./assets/css/footer.css";
import "./assets/css/responsive.css";

const App = (props: any) => {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <div id="main-container">
        <Menu />
        <div id="body-container" className="container">
          <Switch>
            <Route exact path={HOME} component={Artists} />
            <Route exact path={ARTISTS} component={Artists} />
            <Route exact path={ALBUMS} component={Albums} />
            <Route exact path={SONGS} component={Songs} />
            <Route exact path={PLAY} component={Play} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
