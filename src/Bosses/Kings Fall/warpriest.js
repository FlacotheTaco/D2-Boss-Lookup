import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function Warpriest() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              The Warpriest is the first boss in the King's Fall raid. In the encounter, the team will three groups of two, each at a plate on left, middle, or right.
              After killing some ads, the Warpriest will summon a sequence of plates that the team will need to stand on. After standing on the plates, the team will need to gather in the middle and shoot the Warpriest.
              As damage is happening, taken knights will spawn throughout the arena and will drop a brand claimer when killed. The brand claimer will need to be picked up and the team will need to stand in the aura to avoid dying.
              Complete the process until the Warpriest is defeated.
            </p>
        </div>
        <div className="weaponAdvice">
            <h1> Loadout Recommendations </h1>
            <p> 
              It's also recommded to have someone run a debuff weapon like Tractor Cannon and another person using Gjallarhorn to increase damage output.
              The other guardians should run a combination of rocket launches, high damage special weapons, and single hit supers.
              A loadout like Izanagi's Burden, Apex Predator, and a single hit super like Celestial Nighthawk Golden Gun will help to deal high damage.
              Surge mods along with time dialation are also recommded for maximizing damage output. 
              There should also be a Warlock using Well of Radiance for the survivability of the team.
            </p>
            <h1>Video Demo</h1>
            <YoutubeEmbed embedId="oauAOg69Ce8"/>
        </div>
      </div> 
    </div>
    );
  }
export default Warpriest;