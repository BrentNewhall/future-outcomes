import React, { Component } from 'react';

import Navbar from './Navbar.js';

class Civilizations extends Component {
    render() {
        return( 
            <div className="App">
            <Navbar />
            <div className="container">
              <header>
                <h1>Civilizations</h1>
              </header>
              <ul className="collapsible">
                <li>
                    <div className="collapsible-header">Korbo</div>
                    <div className="collapsible-body">
                        <p>This pre-industrial civilization venerates Korbo, an ancient god of fire and blood. It demands gruesome sacrifices in giant stone temples, and its priesthood works to stifle social disorder from the Water People, a revolutionary cult.</p>
                        <h2><i class="fas fa-walking"></i> Characters</h2>
                        <ol>
                            <li> Chief Priest Karbak, preoccupied and erratic.</li>
                            <li> Priestess Thiss, fiery and ambitious.</li>
                            <li> Initiate Pranat, devoted and beautiful.</li>
                            <li> Thawna of the Water People, serious and virtuous.</li>
                            <li> Senator Lotho, vague and flaky.</li>
                            <li> Arma the Assassin, ugly and miserable.</li>
                        </ol>
                        <h2><i class="fas fa-exclamation-circle"></i> Escalations</h2>
                        <ol>
                            <li> The Water People discredit an enemy.</li>
                            <li> The Water People put out a hit on an enemy.</li>
                            <li> The Water People open a new temple in the heart of the city, which attracts much attention.</li>
                            <li> Karbak reveals "Phase Two."</li>
                            <li> Lotho makes his move in the Senate.</li>
                            <li> A new prophet of Korbo appears, swaying the religion to a more extreme position.</li>
                        </ol>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">Valla and Thonna</div>
                    <div className="collapsible-body">
                        <p>Valla/Thonna content here.</p>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}

export default Civilizations;