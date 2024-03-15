import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function ConsecratedMind() {
  return (
    <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
          <h1> Boss Info </h1>
          <p>
          The Consecrated Mind was first shown siphoning radiolarian fluid off of a Minotaur by Guardians tracking the signal from the Unknown Artifact into the Black Garden. 
          It flees across the Embrace section of the Garden whilst summoning Angelic Hydras and creating Voltaic Charges to occupy its enemies pursuing the ancient Harpy, leading them to an ambush of Vex Cyclops at the end. 
          Once the fireteam manages to catch up with the Consecrated Mind and contain its last Voltaic Charge, it retreats into the ether.
          The Guardians made their way into the Undergrowth labyrinth where they fought through Vex defenses and secured the central Conflux, to which they use to draw the Mind out of hiding. 
          In their second confrontation, the fireteam split between keeping the Harpy's Constructed Rapture attack at bay and overflowing one of the adjacent relays with Voltaic Motes. 
          Once the Mind was drawn to the overloaded relay, the Guardians could wear its defenses down temporarily and damage its exposed core. 
          Despite backing away for one final attack, the Consecrated Mind met its end in a fiery, blinding explosion. 
          </p>
        </div>
        <div className="weaponAdvice">
          <h1> Loadout Recommendations </h1>
          <p>
            The team composition mostly doesn't matter, but it is recommended to have one person using divinity and others to use rockets or linear fusion rifles.
          </p>
          <h1>Video Demo</h1>
          <YoutubeEmbed embedId="oauAOg69Ce8" />
        </div>
      </div>
    </div>
  );
}

export default ConsecratedMind;