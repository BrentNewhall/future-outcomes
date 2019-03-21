import React, { Component } from 'react';

import Navbar from './Navbar.js';
import OutcomeRows from './OutcomeRows.js';

const enemies = [
    {
        id: "crocodile-people",
        name: "Crocodile People",
        hurt: 5,
        trigger: "When the crocodile person hurts someone",
        outcomes: [
            "The crocodile person targets a different enemy.",
            "The crocodile person targets a different enemy.",
            "The crocodile person trips its enemy, immobilizing it next turn.",
            "The crocodile person trips its enemy, immobilizing it next turn.",
            "The crocodile person immediately hurts another enemy.",
            "The crocodile person immediately hurts another enemy.",
        ]
    },
    {
        id: "death-squad",
        name: "Death Squad",
        description: "Treat the squad as a single enemy; it normally consists of 4 to 6 individuals.",
        hurt: 5,
        trigger: "When the Death Squad is hurt",
        outcomes: [
            "The death squad retreats to reports to its superiors.",
            "No effect.",
            "No effect.",
            "No effect.",
            "The death squad calls for reinforcements.",
            "The death squad hurts a random PC.",
        ]
    },
    {
        id: "freakin-savages",
        name: "Freakin' Savages",
        hurt: 2,
        trigger: "When a Savage is physically attacked",
        outcomes: [
            "The savage runs away.",
            "The savage looks at its enemy stupidly.",
            "The savage trips its enemy so it is immobilized next turn.",
            "The savage trips its enemy so it is immobilized next turn.",
            "The savage screams for help, attracting all savages in the area to join the fight.",
            "The savage screams for help, attracting all savages in the area to join the fight.",
        ]
    },
    {
        id: "killer-kudzu",
        name: "Killer Kudzu",
        hurt: 3,
        trigger: "When the killer kudzu is stepped on",
        outcomes: [
            "The kudzu rustles menacingly.",
            "The kudzu rustles menacingly.",
            "The character is immobilized until the kudzu is destroyed.",
            "The character is immobilized until the kudzu is destroyed.",
            "The character is immobilized until the kudzu is destroyed, and the character is distracted next turn.",
            "The character is immobilized until the kudzu is destroyed, and the character is hurt.",
        ]
    },
    {
        id: "slime-creature",
        name: "Slime Creature",
        hurt: 4,
        trigger: "When the slime creature is hurt",
        outcomes: [
            "The slime creature moans menacingly.",
            "The slime creature moans menacingly.",
            "The slime creature drops acidic slime on the ground.",
            "The slime creature drops acidic slime on the ground.",
            "The slime creature spawns another slime creature.",
        ]
    },
]

class Enemy extends Component {
    render() {
        let outcomes = <OutcomeRows move={this.props.enemy} outcomeClickHandler={null} redeemLuck={null} />;
        let hurt = []
        for( let index = 0; index < this.props.enemy.hurt; index++ ) {
            hurt.push( <span><input type='checkbox' name={'hurt' + index} id={'hurt-' + this.props.enemy.id + "-" + index} key={index} value={index} /><label for={'hurt-' + this.props.enemy.id + '-' + index}></label></span> );
        }
        return (
            <li>
                <div className="collapsible-header">{this.props.enemy.name}</div>
                <div className="collapsible-body">
                <form>Hurt: {hurt}</form>
                <table>
                    <thead>
                        <tr>
                            <th>Roll</th>
                            <th>{this.props.enemy.trigger}...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {outcomes}
                    </tbody>
                </table>
                </div>
            </li>
        );
    }
}

class Enemies extends Component {
    render() {
        let enemyContent = enemies.map( (enemy, index) => {
            return <Enemy enemy={enemy} key={index} />;
        });
        return( 
            <div className="App">
            <Navbar />
            <div className="container">
              <header>
                <h1>Enemies</h1>
              </header>
              <ul className="collapsible">
                {enemyContent}
              </ul>
            </div>
          </div>
        )
    }
}

export default Enemies;