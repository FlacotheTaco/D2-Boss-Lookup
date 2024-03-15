import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function Templar() {
  return (
    <div>
    <TopBar />
    <BossSearchBar />
    <div className="bossContainer">
      <div className="bossInfo">
          <h1> Boss Info </h1>
          <p> 
            Have 1 person do the mechanics and the rest of the team stands on a ledge to deal damage. When the Templar shield goes down, shoot the boss with a lot of damage.
          </p>
      </div>
      <div className="weaponAdvice">
          <h1> Loadout Recommendations </h1>
          <p> 
            Use a Well of Radiance and any heavy weapon that can deal a lot of damage. Rocket launchers are recommended for dealing damage to the boss, but just about any strong heavy weapon and super will do the trick.
          </p>
          <h1>Video Demo</h1>
          <YoutubeEmbed embedId="oauAOg69Ce8"/>
      </div>
    </div> 
  </div>
  );
}
export default Templar;