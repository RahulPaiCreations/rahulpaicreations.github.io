import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function Octagons() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/octagons"
          render={() => (
            <div>
              <TitleDate title="Octagons" date="27th Mar. 2016" />
              <p>
                Random animation when messing with DupliVerts. The bump map was
                procedural, and it's qutie weird.
              </p>
              <iframe
                width="800vw"
                height="450vw"
                src="https://www.youtube-nocookie.com/embed/TZ56mkq4aRs"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="1"
                className="youtube"
              ></iframe>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
