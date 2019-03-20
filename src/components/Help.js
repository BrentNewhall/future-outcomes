import React, { Component } from 'react';

import Navbar from './Navbar.js';

class Help extends Component {
    render() {
        return( 
            <div className="App">
            <Navbar />
            <div className="container">
              <header>
                <h1>Help</h1>
              </header>
              <p>This app is a digital tool to play the tabletop RPG <em>Future Outcomes</em>.</p>
              <h2>Creating a Character</h2>
              <p>Each character is made up of Moves, and each Move has 6 possible Outcomes.</p>
              <h2>Playing Your Character</h2>
              <p>As you play, you will come across situations where one of your Moves applies. In that case, tap a Move's name and 2 possible Outcomes will be highlighted. Choose which one occurs by tapping that Outcome. If you tap a negative Outcome, you will get 1 point of Luck.</p>
              <p>Some Outcomes will apply a new Condition to your character, like <em>immobilized</em> or <em>distracted</em>. To add a Condition, tap the Add Condition button and select it.</p>
              <p>There's one special Outcome: <em>hurt</em>. You can be hurt multiple times! There's a progress bar to track your hurt; tap the + or - buttons to add or remove hurt.</p>
            </div>
          </div>
        )
    }
}

export default Help;