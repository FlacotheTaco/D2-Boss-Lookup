import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import '../Bosspage.css';

function Kalli() {
    return (
        <div>
          <TopBar />
          <BossSearchBar/>
          <div className="container">
            <div className="bossInfo">
              <h1> Boss Info </h1>
              <p> The most recent stategy for defeating Kalli revolves around a cheese to kill her without having to do the mechanics. 
                This is done by having a guardian use a damage over time weapon like Anarchy or Witherhoard to lock Kalli in place at one of the plates while damage is dealt. 
                To do this, the other five guardians will gather at one of the plates and the guardian with the damage over time weapon will shoot start the encounter and then run to the plate.
                When Kalli teleports to the plate, the guardian with the damage over time weapon will shoot Kalli to lock her into place and then the other five guardians will deal damage to her.
                When Kalli's health bar is depleted, the team will stop shooting and wait for the encounter to end. 
              </p>              
            </div>
            <div className="weaponAdvice">
              <h1> Loadout Recommendations </h1>
              <p> 
                One person must run a damage over time weapon like Anarchy or Witherhoard to lock Kalli in place. 
                The other five guardians should run a combination of high damage weapons and single hit supers. 
                Using a loadout like Izanagi's Burden, Apex Predator, and a single hit super like Celestial Nighthawk Golden Gun will help to deal high damage to Kalli.
                Surge mods are also recommded for maximizing damage output.
              </p>
            </div>
          </div>
      </div>
    );
  }
export default Kalli;