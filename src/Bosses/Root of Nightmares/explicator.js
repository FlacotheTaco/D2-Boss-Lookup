import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";

function Explicator() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
            When engaged, Zo'aurc acts like a normal Incendior. He tends to stay near the back of the arena, but will begin chasing and aggressively attacking guardians the lower his health gets. 
            When the planets have been fully aligned, Zo'aurc will return to his stage before gaining a resonant or light shield and jumping down to confront the fireteam. 
            When a sufficient amount of damage is dealt to Zo'aurc using the matching plate, he will stagger back and use his computer to disable the plate the guardians used and send a twister of flame into it, necessitating a move. 
            He will also switch the affinity of his shields, requiring the fireteam to use the opposite element for the next portion of damage. 
            When all three plates have been exhausted he will stop being vulnerable and return to the top of his stage again.

            When Zo'aurc reaches the last tenth of his health, he will enter his final stand. Zo'aurc will reach into the air and pull the three middle planets towards him, empowering all three with resonant energy and summoning a much more massive twister which he stands in. 
            When the guardians defeat him, he will be sucked into his tornado and ultimately explode when he reaches the top, before dramatically crashing back down into the ground, dead. The pathway behind him will open, and the Guardians will be free to continue towards their goal. 
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
export default Explicator;