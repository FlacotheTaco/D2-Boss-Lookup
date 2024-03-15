import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function Atraks() {
  return (
    <div>
      <TopBar />
      <BossSearchBar/>
      <div className="bossContainer">
        <div className="bossInfo">
          <h1> Boss Info </h1>
          <p> 
            Atraks-1 is the third encounter in the Deep Stone Crypt raid. The encounter is split into two rooms, the space room and the replication room. 
            The space room is where the boss is located and the replication room is where the operator will be sent to. 
            The encounter starts with the space team killing the boss to 10% health and then the operator will be sent to the replication room. 
            The operator will then shoot the correct Atraks-1 replication to send the boss to the replication room. 
            After the boss is sent to the replication room, the space team will kill the boss and the operator will be sent back to the space room. 
            The encounter will then repeat until the boss is dead. 
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
          <YoutubeEmbed embedId="oauAOg69Ce8" />
        </div>
      </div>
    </div>
  );
}
export default Atraks;