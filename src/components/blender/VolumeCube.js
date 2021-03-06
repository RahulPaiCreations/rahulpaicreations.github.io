import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import TitleDate from "../TitleDate";
import Carousel from "../Carousel";

export default function VolumeCube() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/blender/volume-cube"
          render={() => (
            <div>
              <TitleDate title="Volume Cube" date="25th Mar. 2016" />
              <p>
                Messing with volume shaders. Just one material and the Default
                Cube! I was initially trying to make a volumetric version of the
                thing on{" "}
                <a
                  className="link"
                  href="http://durknfred.blogspot.co.uk/2015/02/cycles-voxels.html"
                >
                  this post
                </a>{" "}
                by Derek Barker, but it didn't really work out. Nevertheless, I
                think this is interesting and I quite like it.
              </p>
              <Carousel
                folder="../../assets/volume-cube"
                captions={["", "", ""]}
                aspectRatio={[1, 1]}
              />
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
