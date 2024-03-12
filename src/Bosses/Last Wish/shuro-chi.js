import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";

function ShuroChi() {
    return (
        <div>
          <TopBar />
          <BossSearchBar/>
          <div className="bossContainer">
            <div className="bossInfo">
              <h1> Boss Info </h1>
              <p> 
                Riven is the final boss of the Last Wish raid. The strategy for defeating Riven is to use the cheese method to kill her quickly without most of the mechanics.
                To start the encounter, each player must stand on of the six glowing plates in the room. After the plates unlock, the players will drop down into a room with two exits.
                All players will go through the exit beneath the door where the players originally entered the boss room. When the players are in the next room, one should look at the dark screen for a moving shadow.
                If the shadow is there, the team should stay in that room. Otherwise, the team should go back to the exit room and hug the wall to get teleported back to the room with the plates.
                The team should then go through the other exit and stay in that room. When Riven appears, the team should gather at her left leg and attack her with swords. 
                When her health bar reaches the marker, the team will be teleported to a platforming room where they should attempt to get to the top of the room. After finishing the platforming,
                the team will be teleported back to the enterance room where they should gather at the left leg of Riven again to kill her. When she is dead, enter her mouth and destroy her heart.
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
              <YoutubeEmbed embedId="oauAOg69Ce8"/>
            </div>
          </div> 
      </div>
    );
  }
export default ShuroChi;