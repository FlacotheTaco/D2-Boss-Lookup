import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function IrYut() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              Ir Yut is the second to last encounter in the Crota's End raid. In the encounter, the team will need to kill the wizards that spawn in the towers on the left and right side of the map.
              After killing the wizards, the team will need to kill the shriekers that spawn in the towers. After killing the shriekers, the team will need to kill Ir Yut.
              The team will need to deal enough damage to Ir Yut to reach the damage threshold on her health bar before she finishes her song, or the team will wipe.
              To defeat the wizards and shriekers, the team will need to juggle the chalice of light to become charged with light, allowing them to enter the doorways containing the wizards.
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
export default IrYut;