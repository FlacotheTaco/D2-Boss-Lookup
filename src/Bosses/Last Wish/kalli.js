import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import '../Bosspage.css';
import '../../index.css';

function Kalli() {
    return (
        <div>
          <TopBar />
          <BossSearchBar/>
          <div className="container">
            <div className="bossInfo">
              <p>Guardians will enter a large empty chamber whose layout is similar to that of the Blind Well. 
                Near the center pit, three groups of two icons will appear to give six in total. Down, 
                Cloud, Eight, and Infinity Snakes are the options One icon will not be shown. See the image below for reference
              </p>
                
                <p> 
                There will be a matching plate for each of the icons (I.e. Heads, Eights, and Smiles being shown. 
                Two of each Smile, Head, and Eight plates must be captured. Each plate will have their symbol above or near the side of the plate. 
                Each plate is divided into three sections. Two Taken Blight bombs will be above two of the sections. Stand on top of the empty section of the plate and defend as Taken Thrall attempt to overwhelm the team. 
                If a plate is held long enough, a Ravenous Taken Knight will spawn. Killing the Taken Knight is required to "complete" a symbol.
                Also be cautious, as Kalli will warp to a random plate and attack with blasts that will knock the player into the air, 
                then "scream" at the player to knock them back. 
                Simply shooting at Kalli will make her teleport away. Shortly after each plate has been captured, damage phase begins, 
                and Kalli will enter the room's center area and attack with bolts and an ability similar to a Psion's Psionic Blast. 
                Weapons that do not rely on precision damage are recommended, due to Kalli having a small head, unless your fireteam is using Divinity. 
                After a short while, she will cast her weapon which will wipe the team. Before the spell is complete, 
                each Guardian must run into one of the open doors on the side of the pit below Kalli, 
                which are tied to the Ravenous Taken Knights. Ensure that you kill a the Knights to guarantee that a door will be open, or you will be wiped. 
                If your team does not deplete her health, you must repeat cleansing plates to make Kalli vulnerable again. </p>
            </div>
            {/*<div className="weaponAdvice">
              <p> 
              
                </p>
                </div>*/}
          </div>
      </div>
    );
  }
export default Kalli;