import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import '../Bosspage.css';
import YoutubeEmbed from "../YoutubeEmbed";

function Morgeth() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              Morgeth relies an a stategy called "forced right," which is a strategy which reduced the RNG of the encounter to make it more consistent.
              First, the team should split into two groups of three. The left team should have one of their member pick up the taken strength in the center of the arena, starting the encounter.
              After that, four taken strength should spawn in the arena, two on the left and two on the right. On the left, both the two guardians without strengh should pick up the taken strength.
              On the right, only one guardian should pick up the taken strength. Because of this, when Morgeth uses his detail attack, an attack that details the person with the most strength, he will always target the right side.
              The other two guardians on the right side should kill a taken captain to spawn an orb which can be used to free the detained guardian. After the detainment is over, another set of taken strength will spawn and the process will repeat.
              When enough taken strength is gathered, the guardians should gather at the door and kill Morgeth, ending the encounter.
            </p>
        </div>
        <div className="weaponAdvice">
            <h1> Loadout Recommendations </h1>
            <p> 
              It's recommded to have someone run a debuff weapon like Tractor Cannon and another person using Gjallarhorn to increase rocket damage output.
              The other guardians should run a combination of rocket launches, high damage special weapons, and single hit supers.
              A loadout like Izanagi's Burden, Apex Predator, and a single hit super like Celestial Nighthawk Golden Gun will help to deal high damage.
              Surge mods along with time dialation are also recommded for maximizing damage output.
              There should also be a Warlock using Well of Radiance for the survivability of the team.
            </p>
            <h1>Video Demo</h1>
            <YoutubeEmbed embedId="MZI4IfFqSVE" />
        </div>
      </div> 
    </div>
    );
  }
export default Morgeth;