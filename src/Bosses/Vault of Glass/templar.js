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
            Assign one person to use the relic and the other five people kill the surrounding enemies. When the relic holder breaks the Templar's shield, everyone will gather at the ledge at the spawn of the fight and deal damage.
            Because Templar does not have much health, a one-phase should be very easy. As damage is being dealt, some people will be detained, but simply shooting the bubble will release the detain.
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