import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function Rhulk() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              Rhulk is the final boss of the Vow of the Disciple raid. The encounter is structured into two phases: a dunking phase and a damage phase. In the dunking phase, 
              the team will need to split into three groups of two. Two people will be standing on the plate in the center of the starting zone and will be rotating shooting the crystal to gain pervading darkness.
              The another team will be shooting the crystals on the left and will be standing in Rhulk's lazor to gain the empowering darkness buff. This group will then be dunking their buff into the signs that the last group calls out.
              Repeat this process three times to reach the damage phase. In the damage phase, one person in the team will need to gather empowering darkness by shooting Rhulk's glaive and standing in his lazor. 
              After dunking, damage will start for Rhulk.
            </p>
        </div>
        <div className="weaponAdvice">
            <h1> Loadout Recommendations </h1>
            <p> 
              It's also recommded to have someone run a debuff weapon like Tractor Cannon and another person using Gjallarhorn to increase damage output.
              The other guardians should run a combination of rocket launches, high damage special weapons, and single hit supers.
              A loadout like Izanagi's Burden, Apex Predator, and a single hit super like Celestial Nighthawk Golden Gun will help to deal high damage.
              Surge mods along with time dialation are also recommded for maximizing damage output. 
              There should also be several Warlocks using Well of Radiance for the survivability of the team.
            </p>
            <h1>Video Demo</h1>
            <YoutubeEmbed embedId="oauAOg69Ce8"/>
        </div>
      </div> 
    </div>
    );
  }
export default Rhulk;