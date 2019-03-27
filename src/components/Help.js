import React, { Component } from 'react';

class Help extends Component {
    render() {
        return( 
            <div>
              <header>
                <h1>Help</h1>
              </header>
              <p>This app is a digital tool to play the tabletop RPG <em>Future Outcomes</em>.</p>
              <h2>Creating a Character</h2>
              <p>Each character is made up of Moves, and each Move has 6 possible Outcomes. When you create a character, you start with three basic Moves. Add one more Move from the Skills Move list and one Move from the Equipment Moves list.</p>
              <p>Your character also starts with several boxes of hurt, all of which start unchecked. You're unhurt!</p>
              <h2>Playing Your Character</h2>
              <p><em>Future Outcomes</em> is a game of SF galactic exploration. Your character will make contact with otherwise unexplored worlds and have adventures thereon.</p>
              <p>As you narrate your character's actions, you will come across situations where your character's actions match one of your Moves. For example, if you get into a fist-fight, the Physical Combat Move would apply.</p>
              <p><strong>When you act in a way that matches one of your Moves</strong>, tap a Move's name and 2 possible Outcomes will be highlighted. Choose which one occurs by tapping that Outcome, then describe that Outcome to the rest of the players.</p>
              <p>If you tap a negative Outcome, you will get 1 point of Luck. Later, after you have tapped a Move, you can redeem 1 point of Luck to increase each Outcome by one level (making each Outcome a little better).</p>
              <p>Some Outcomes will apply a new Condition to your character, like <em>immobilized</em> or <em>distracted</em>. To add a Condition, tap the Add Condition button then tap the relevant Condition. To remove a Condition, tap it on your character's page.</p>
              <p>There's one special Condition: <em>hurt</em>. You can be hurt multiple times! There's a progress bar to track your hurt; tap the + or - buttons to add or remove hurt.</p>
            </div>
        )
    }
}

export default Help;