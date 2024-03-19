import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";

function Oryx() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              Oryx is the final encounter in the King's Fall raid. In the encounter, the team will split into 4 plate watchers and two flex players.
              When the plates are activated, the plate watchers will need to call out the order of the plates that the team will need to stand on. The flex players will need to stand on the plates in the order that the plate watchers call out.
              One player will be split between realms and will be running between the plates. After running between the plates three times, the player will steal the aura of invulnerability a knight that drops from a ship.
              When Oryx slams his fist against a plate, the four plate watchers will have to stand within the orbs dropped by ogres. The team will then need to shoot Oryx's chest to stagger him and then deal damage to him.
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
export default Oryx;