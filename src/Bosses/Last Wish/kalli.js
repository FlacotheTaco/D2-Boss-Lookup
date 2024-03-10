import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import '../Bosspage.css';
import YoutubeEmbed from "../YoutubeEmbed";

function Kalli() {
  return (
    <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              The most recent stategy for defeating Kalli revolves around a cheese to kill her without having to do the mechanics. 
              This is done by having a guardian use a damage over time weapon like Anarchy or Witherhoard to lock Kalli in place at one of the plates while damage is dealt. 
              To do this, the other five guardians will gather at one of the plates and the guardian with the damage over time weapon will shoot start the encounter, shoot Kalli, then run to the plate.
              When Kalli teleports to the plate, the guardian with the damage over time weapon will shoot Kalli again to lock her into place and then the other five guardians will deal damage to her.
              As damage is being dealt, the damage over time person will have to refresh the effect every 5-8 seconds. When Kalli's health bar is depleted, the team will stop shooting and wait for the encounter to end. 
            </p>
        </div>
        <div className="weaponAdvice">
            <h1> Loadout Recommendations </h1>
            <p> 
              One person must run a damage over time weapon like Anarchy or Witherhoard to lock Kalli in place. 
              It's also recommded to have someone run a debuff weapon like Tractor Cannon and another person using Gjallarhorn to increase damage output.
              The other guardians should run a combination of rocket launches, high damage special weapons, and single hit supers.
              A loadout like Izanagi's Burden, Apex Predator, and a single hit super like Celestial Nighthawk Golden Gun will help to deal high damage to Kalli.
              Surge mods along with time dialation are also recommded for maximizing damage output. 
              There should also be a Warlock using Well of Radiance for the survivability of the team.
            </p>
            <h1>Video Demo</h1>
            <YoutubeEmbed embedId="uXFrl-FleLU"/>
        </div>
      </div> 
    </div>
  );
}
export default Kalli;