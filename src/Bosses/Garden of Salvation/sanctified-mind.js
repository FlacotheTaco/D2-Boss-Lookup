import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function SanctifiedMind() {
  return (
    <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
          <h1> Boss Info </h1>
          <p>
            Each player should be put onto one of three teams: Defender/Builder:
            These players will remain the main area for the entirety of the fight,
            barring rare exceptions. Their main tasks should be to ensure no Goblins
            sacrifice (if non-Shielded), Cyclopes are killed, Portal Teams are pulled
            when called, and the floors remain intact. Team One: These players are
            responsible for entering the first portal of each side. Within the
            portals, the players should eliminate all Vex, acquire Motes, then call
            out when all possible Motes have been picked up. The total value across
            both players should be 15-18. After being pulled back to main area, these
            players should deposit Motes and use their "Enlightened" buff to assist
            in defending the Relays. Team Two: Team two has a nearly identical role
            to Team One, with the exception being that they will utilize the second
            set of portals on each side. Upon destroying the first photoreceptor
            (either left or right), the players designated to Team One should enter.
            During this time, Defenders should be doing their tasks with the
            assistance of Team Two. Upon Team One's callout, players in the main area
            should shoot the photoreceptor of the side Team One is currently on. This
            will bring Team One back to main area, and open a new portal that Team
            Two should enter. Team One should then deposit their motes. Likewise,
            when Team Two is completed inside their portal and have called to be
            brought back to the main area, the correct photoreceptor should be
            destroyed. Ideally, after Team Two deposits, the Relay should become
            pulsing with energy. This will not be the case if motes were missed such
            that the total across both teams is less than 30, or a Goblin sacrificed
            to that Relay. If either are the case, a player, ideally a player on the
            Defending team, should enter the portal of the side Team Two just
            returned from. This process should be repeated on the opposite side.
            During any downtime, Defenders should work with any players in the main
            area to complete the rebuilding of all adjacent floors to the Relays.
            Take caution in deciding when to construct these platforms, as players
            are unable to use any abilities or weapons while tethered. Damage Phase
            In addition the teams assigned for the main portion of this fight, there
            should be two teams designated for the damage phase of this fight.
            Players should be assigned as to two groups of three as follows: Tether
            Team: These players are responsible for organizing the tether used to
            disrupt Sanctified Mind's casting of the wipe mechanic. These should be
            segmented into (1) Anchor, the player closest to the Relay, (2) Middle,
            the player in the middle, and (3) Boss, the player closest to Sanctified
            Mind. Damage Team: This team's sole purpose should be to deal damage to
            Sanctified Mind. They should also assist in killing any Goblins that are
            attacking the Tether team. While it is possible to extend the duration of
            a damage phase by tethering again, it is discouraged, as it is very
            difficult to coordinate compared to the first tether, and will prevent
            players using any "Relay Defender" mods from obtaining the damage
            increase while standing next to the opposite Relay. After a brief period
            of time, the damage phase will end, and the process should be repeated.
            There is a long period of time between the end of damage and when the
            first Angelic spawns. This time should be utilized to reconstruct missing
            platforms.
          </p>
        </div>
        <div className="weaponAdvice">
          <h1> Loadout Recommendations </h1>
          <p>
            The team composition should include at least one Warlock with Well of
            Radiance. The other guardians can run any class. The team should all run
            high damage swords like Falling Guillotine or Lament. The team should
            also run a debuff weapon like Tractor Cannon. For armor mods, triple
            surge mods, a time dialation mod, and triple lucent blades are
            recommended for maximizing damage output.
          </p>
          <h1>Video Demo</h1>
          <YoutubeEmbed embedId="oauAOg69Ce8" />
        </div>
      </div>
    </div>
  );
}

export default SanctifiedMind;