import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function Caretaker() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              Caretaker is the third encounter and first boss that is fought in the Vow of the Disciple raid. The team is split into 3 groups of two. 
              One group will be on top of Caretaker and will be taunting to make him take longer to get to the damage zone. The other two groups will be doing the same reading and running mechanic as in the previous encounters.
              When Caretaker gets to the higher level of the arena, the group should gather on the plate do deal damage to Caretaker. Only deal enough damage to reach the threshold on his health bar.
              When Caretaker gets to last stand, the group should run up the stairs and finish him off.
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
export default Caretaker;