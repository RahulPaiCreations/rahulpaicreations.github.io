import React from "react";
import Interactive from "react-interactive";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Fireship from "./blender/Fireship";
import Coke from "./blender/Coke";
import Lamp from "./blender/Lamp";
import Spaceship from "./blender/Spaceship";
import RPC from "./blender/RPC";
import Parker from "./blender/Parker";
import Liquid from "./blender/Liquid";
import KEGS10Y from "./blender/KEGS10Y";
import Cityscape from "./blender/Cityscape";
import Pokeballs from "./blender/Pokeballs";
import Kitchen from "./blender/Kitchen";
import Diglett from "./blender/Diglett";
import FibreOptics from "./blender/FibreOptics";
import Hexo from "./blender/Hexo";
import RandomCubes from "./blender/RandomCubes";
import Fireball from "./blender/Fireball";
import Window from "./blender/Window";
import Glasses from "./blender/Glasses";
import Flower from "./blender/Flower";
import Screen from "./blender/Screen";
import RayBan from "./blender/RayBan";
import Elucidator from "./blender/Elucidator";
import Batman from "./blender/Batman";
import Heart from "./blender/Heart";
import HeartRiver from "./blender/HeartRiver";
import Monkey from "./blender/Monkey";
import Alien from "./blender/Alien";
import Blerb from "./blender/Blerb";
import Cobra from "./blender/Cobra";
import HeartFracture from "./blender/HeartFracture";
import Bubble from "./blender/Bubble";
import NiceDay from "./blender/NiceDay";
import BadMedicine from "./blender/BadMedicine";
import RPCAnim from "./blender/RPCAnim";
import Wavey from "./blender/Wavey";
import Room from "./blender/Room";

//later
import RPAnim from "./blender/RPAnim";
import VolumeCube from "./blender/VolumeCube";
import Octagons from "./blender/Octagons";
import LegoWater from "./blender/LegoWater";
import RobotSculpt from "./blender/RobotSculpt";
import Gun from "./blender/Gun";
import Torso from "./blender/Torso";
import CharlieBrown from "./blender/CharlieBrown";
import SteelHorse from "./blender/SteelHorse";
import RedSaturation from "./blender/RedSaturation";
import ProductDesign from "./blender/ProductDesign";
import BlueReact from "./blender/BlueReact";

export default function Blender() {
  const blenderProjects = {
    fireship: Fireship,
    coke: Coke,
    lamp: Lamp,
    spaceship: Spaceship,
    rpc: RPC,
    parker: Parker,
    liquid: Liquid,
    "kegs-10y": KEGS10Y,
    cityscape: Cityscape,
    pokeballs: Pokeballs,
    kitchen: Kitchen,
    diglett: Diglett,
    "fibre-optics": FibreOptics,
    "rpc-anim": RPCAnim,
    hexo: Hexo,
    "random-cubes": RandomCubes,
    fireball: Fireball,
    window: Window,
    glasses: Glasses,
    flower: Flower,
    screen: Screen,
    "ray-ban": RayBan,
    elucidator: Elucidator,
    batman: Batman,
    heart: Heart,
    "heart-river": HeartRiver,
    monkey: Monkey,
    alien: Alien,
    blerb: Blerb,
    cobra: Cobra,
    "steel-horse": SteelHorse,
    "heart-fracture": HeartFracture,
    bubble: Bubble,
    "have-a-nice-day": NiceDay,
    "bad-medicine": BadMedicine,
    wavey: Wavey,
    room: Room,
    "volume-cube": VolumeCube,
    octagons: Octagons,
    "lego-water": LegoWater,
    "robot-sculpt": RobotSculpt,
    gun: Gun,
    torso: Torso,
    "charlie-brown": CharlieBrown,
    "red-saturation": RedSaturation,
    "rp-anim": RPAnim,
    "product-design": ProductDesign,
    "blue-react": BlueReact,
  };
  return (
    <div>
      <Switch>
        {Object.keys(blenderProjects).map(
          (name) => (
            <Route
              exact
              path={`/blender/${name}`}
              component={blenderProjects[name]}
            />
          ),
          this
        )}
        <Route
          exact
          path="/blender"
          render={() => (
            <div>
              <div className="otherBanner banner"></div>
              <h1 className="title titleLarge">Blender</h1>
              {Object.keys(blenderProjects).map(
                (name, index) => (
                  <div className="blenderLink">
                    <Interactive as={Link} to={`/blender/${name}`}>
                      <img src={`../../assets/${name}/thumbnail.jpg`} />
                      <div className="title">
                        <em>
                          {index + 1}. {name.toUpperCase().replace("-", " ")}
                        </em>
                      </div>
                    </Interactive>
                  </div>
                ),
                this
              )}
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
