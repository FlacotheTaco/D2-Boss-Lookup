import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";

function Crota() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              Crota is the final boss in the Crota's End raid. In the encounter, the team should assign two sword bearers, one oversoul killer, and the rest of the team should be on add control.
              The team will need to kill the sword bearers and pick up the sword to deal damage to Crota. After dealing damage, the one person should shoot the oversoul.
              To pick up swords, the team should juggle the Chalice of Light to gain become charged with light. Also make sure to kill the boomer knights and the ogres that spawn, as they can deal large amounts of damage.
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
export default Crota;