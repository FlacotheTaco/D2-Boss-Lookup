import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function ShuroChi() {
    return (
        <div>
          <TopBar />
          <BossSearchBar/>
          <div className="bossContainer">
            <div className="bossInfo">
              <h1> Boss Info </h1>
              <p> 
                Shuro Chi is the second boss of the Last Wish raid. The encounter typically has a small group of people pre-load the plates before the encounter starts to remove a mechanic. 
                To pre-load the plates, reach the plates before starting the encounter by jumping on the rock to the right of the encounter then running to the plates.
                At the plates, first pull out an eager edge sword and wait for the eager edge buff to go away. Then, jump on the plate and wait for a few damage ticks.
                Then, fall backwards off the plate and quickly jump back on using the sword. After jumping off the plate again, the plate should be glowing. 
                Do this for the rest of the plates and the Shuro Chi encounter will start with the commands already accepted. 
              </p>
            </div>
            <div className="weaponAdvice">
              <h1> Loadout Recommendations </h1>
              <p> 
                The team composition should include at least one Warlock with Well of Radiance. The other guardians can run any class.
                The team should all run high damage swords like Falling Guillotine or Lament. The team should also run a debuff weapon like Tractor Cannon.
                For armor mods, triple surge mods, a time dialation mod, and triple lucent blades are recommended for maximizing damage output.
              </p>
              <h1>Video Demo</h1>
              <YoutubeEmbed embedId="BmJnUeJ0D6I"/>
            </div>
          </div> 
      </div>
    );
  }
export default ShuroChi;