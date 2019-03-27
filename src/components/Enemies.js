import React, { Component } from 'react';
import M from 'materialize-css';

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
            "The crocodile person immediately hurts one of its enemies.",
            "The crocodile person immediately hurts one of its enemies.",
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
            "The death squad retreats to reports to its superiors.",
            "The death squad calls for reinforcements.",
            "The death squad hurts a random PC.",
            "The death squad hurts a random PC.",
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
            "The savage screams for help, attracting all savages in the area to join the fight.",
            "The savage screams for help, attracting all savages in the area to join the fight.",
            "The savage hurts an enemy.",
        ]
    },
    {
        id: "giant-malfunctioning-death-machine",
        name: "Giant Malfunctioning Death Machine",
        hurt: 1,
        trigger: "When anyone touches the machine",
        outcomes: [
            "Oil spurts out of a hole, covering nearby creatures and the ground in slippery oil.",
            "The machine lurches several meters in a random direction.",
            "The machine belches flame, hurting a random creature within 5 meters.",
            "The machine fires a laser, hurting a random creature within 50 meters.",
            "Part of the machine explodes, hurting all creatures within 5 meters.",
            "The machine starts a 60-second self-destruct countdown.",
        ]
    },
    {
        id: "guard-bot",
        name: "Guard Bot",
        hurt: 1,
        trigger: "When the guard bot is attacked",
        outcomes: [
            "The guard bot alerts others to your presence.",
            "The guard bot alerts others to your presence.",
            "The guard bot alerts others to your presence.",
            "The guard bot sparks, hurting any creature within 3 meters.",
            "The guard bot sparks, hurting any creature within 3 meters.",
            "The guard bot alerts others to your presence and sparks, hurting any creature within 3 meters.",
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
        id: "shock-trooper",
        name: "Shock Trooper",
        hurt: 2,
        trigger: "When the shock trooper is attacked",
        outcomes: [
            "The shock trooper fires wildly, damaging the environment.",
            "The shock trooper hurts a random enemy.",
            "The shock trooper hurts a random enemy.",
            "The shock trooper hurts an enemy.",
            "The shock trooper hurts an enemy.",
            "The shock trooper hurts an enemy.",
        ]
    },
    {
        id: "slime-creature",
        name: "Slime Creature",
        hurt: 4,
        trigger: "When the slime creature is hurt",
        outcomes: [
            "The slime creature moans menacingly.",
            "The slime creature drops acidic slime on the ground.",
            "The slime creature drops acidic slime on the ground.",
            "The slime creature spits acid at a creature within 3 meters.",
            "The slime creature spits acid at a creature within 3 meters.",
            "The slime creature spawns another slime creature.",
        ]
    },
]

class Enemy extends Component {
    render() {
        let outcomes = <OutcomeRows move={this.props.enemy} outcomeClickHandler={null} redeemLuck={null} />;
        let hurt = []
        for( let index = 0; index < this.props.enemy.hurt; index++ ) {
            hurt.push( <span key={index}><input type='checkbox' name={'hurt' + index} id={'hurt-' + this.props.enemy.id + "-" + index} key={index} value={index} /><label htmlFor={'hurt-' + this.props.enemy.id + '-' + index}></label></span> );
        }
        return (
            <li key={this.props.enemy.id}>
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
    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    }
    render() {
        let enemyContent = enemies.map( (enemy, index) => {
            return <Enemy enemy={enemy} key={index} />;
        });
        return( 
            <div>
              <header>
                <h1>Enemies</h1>
              </header>
              <ul className="collapsible" data-collapsible="accordion">
                {enemyContent}
              </ul>
           </div>
        )
    }
}

export default Enemies;