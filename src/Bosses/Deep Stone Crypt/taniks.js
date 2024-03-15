import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function Taniks() {
  return (
    <div>
      <TopBar />
      <BossSearchBar/>
      <div className="bossContainer">
        <div className="bossInfo">
          <h1> Boss Info </h1>
          <p> 
            Taniks is the final encounter in the Deep Stone Crypt raid. The encounter is split into three areas: blue, orange and green. Taniks will go to one of the areas when the encounter starts.
            Shoot his thrusters to drop nuclear cores that are to be deposited into the bins at the two areas that Taniks is not at. After the nuclear core are deposited, Taniks will teleport to the center and start damage.
            To deal damage, first jump over the flying debris into Tanik's circle. Then, shoot Taniks until he dies.
          </p>
        </div>
        <div className="weaponAdvice">
          <h1> Loadout Recommendations </h1>
          <p> 
            The team composition should include at least one Warlock with Well of Radiance. The other guardians can run any class.
            The team should use rocket launches with one person using a debuff weapon like Tractor Cannon and another using Gjallarhorn.
            The other guardians should run a combination of rocket launches, high damage special weapons, and single hit supers.
            Surge mods and time dialation are also recommended for maximizing damage output.
          </p>
          <h1>Video Demo</h1>
          <YoutubeEmbed embedId="oauAOg69Ce8" />
        </div>
      </div>
    </div>
  );
}

export default Taniks;