import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';

import Navbar from './Navbar.js';
import ConditionColumn from './ConditionColumn.js';
import Outcome from './Outcome.js';
import store from '../store.js';
import {
    deleteCharacter
  } from '../actions.js';
import conditionImages from '../Images.js';
  
class CharacterPage extends Component {
    constructor( props ) {
      super( props );
      this.state = {
        name: '',
        moves: [],
        luckPoints: 0,
        conditions: [],
      }
      this.redirect = false;
      this.deleteCharacter = this.deleteCharacter.bind( this );
      this.updateStorageAfterDelete = this.updateStorageAfterDelete.bind( this );
      this.addLuckPoint = this.addLuckPoint.bind( this );
      this.confirmClearCondition = this.confirmClearCondition.bind( this );
    }
  
    componentDidMount() {
      this.setState( {
        name: store.getState().characters[this.props.match.params.id].name,
        moves: store.getState().characters[this.props.match.params.id].moves,
        luckPoints: store.getState().characters[this.props.match.params.id].luckPoints,
        conditions: store.getState().characters[this.props.match.params.id].conditions,
      } );
    }
  
    updateStorageAfterDelete() {
      const setCharacters = () => new Promise( (resolve, reject) => {
        localStorage.setItem( "characters", JSON.stringify(this.props.characters) );
      });
      setCharacters().then( this.props.history.push( "/" ) );
    }
  
    deleteCharacter() {
      const deleteChar = () => new Promise( (resolve, reject) => {
        store.dispatch( deleteCharacter( this.props.match.params.id ) );
        resolve();
      })
      deleteChar().then( this.updateStorageAfterDelete );
    }
  
    addMove() {
    }
  
    addLuckPoint() {
      this.setState( { luckPoints: this.state.luckPoints + 1 } );
    }
  
    redeemLuck(e) {
      this.setState( { luckPoints: this.state.luckPoints - 1 } );
    }
  
    addHurt() {
      let numHurts = 0;
      for( let c of this.state.conditions ) {
        if( c === "hurt" ) { numHurts++; }
      }
      if( numHurts < 5 ) {
        this.setState( { conditions: [...this.state.conditions, 'hurt' ] } );
      }
    }
  
    removeHurt() {
      if( this.state.conditions.includes( "hurt" ) ) {
        let conditions = this.state.conditions;
        const pos = conditions.indexOf( "hurt" );
        conditions.splice( pos, 1 );
        this.setState( { conditions } );
      }
    }
  
    confirmClearCondition(condition) {
      const options = {
        title: "Clear?",
        message: "Are you sure you want to clear the " + condition + " condition?",
        buttons: [
          {
            label: "Yes",
            onClick: () => this.clearCondition( condition ),
          },
          {
            label: "No",
            onClick: null,
          }
        ]
      };
      confirmAlert( options );
    }
  
    clearCondition( condition ) {
      let conditions = this.state.conditions.map( (c) => {
        return (c === condition) ? null : c;
      });
      this.setState( { conditions } );
      let characters = this.props.characters;
      characters[this.props.match.params.id].conditions = conditions;
      // Update local storage with changed characters
      const setCharacters = () => new Promise( (resolve, reject) => {
        localStorage.setItem( "characters", JSON.stringify(characters) );
        resolve();
      });
      setCharacters();
    }
  
    render() {
      let moves = [];
      for( let moveIndex = 0; moveIndex < this.state.moves.length - 1; moveIndex += 2 ) {
        moves.push( <div className="row" key={moveIndex}>
                      <Outcome id={this.state.moves[moveIndex]} addLuckPoint={this.addLuckPoint} luck={this.state.luckPoints} />
                      <Outcome id={this.state.moves[moveIndex+1]} addLuckPoint={this.addLuckPoint} luck={this.state.luckPoints} />
                    </div> );
      }
      if( this.state.moves.length % 2 !== 0 ) {
        moves.push( <div className="row" key={this.state.moves.length}>
                      <Outcome id={this.state.moves[this.state.moves.length-1]} addLuckPoint={this.addLuckPoint} luck={this.state.luckPoints} />
                    </div> );
      }
      let redeemDisabled = (this.state.luckPoints === 0 ) ? true : false;
      let hurt = 0;
      let conditions = [];
      this.state.conditions.forEach( (condition, index) => {
        if( condition === 'hurt' ) {
          hurt++;
        }
        else if( condition === "distracted" ) {
          conditions.push( <ConditionColumn key={index} src={conditionImages[0]} condition={condition} confirm={this.confirmClearCondition} /> );
        }
        else if( condition === "immobilized" ) {
          conditions.push( <ConditionColumn key={index} src={conditionImages[1]} condition={condition} confirm={this.confirmClearCondition} /> );
        }
        else if( condition === "pumped" ) {
          conditions.push( <ConditionColumn key={index} src={conditionImages[2]} condition={condition} confirm={this.confirmClearCondition} /> );
        }
        else if( condition === "stunned" ) {
          conditions.push( <ConditionColumn key={index} src={conditionImages[3]} condition={condition} confirm={this.confirmClearCondition} /> );
        }
      });
      const hurtStyle = {
        width: parseInt(hurt / 5 * 100).toString() + "%"
      }
      return (
        <div className="App">
          <Navbar />
          <div className="container">
            <header>
              <h1>{this.state.name}</h1>
            </header>
            <div className="Conditions">{conditions}</div>
            <Link className="btn" to={"/char/addCondition/" + this.props.match.params.id}>Add Condition</Link><br />
            Hurt:
            <div className="HurtRow">
              <button className="HurtLeftButton btn hurt" onClick={() => this.removeHurt()}>-</button>
              <div className="HurtBar progress"><div className="determinate" style={hurtStyle}></div></div>
              <button className="HurtRightButton btn hurt" onClick={() => this.addHurt()}>+</button>
            </div>
            <aside>Luck: {this.state.luckPoints}<button className="btn RedeemButton" disabled={redeemDisabled} onClick={(e) => this.redeemLuck(e)}>Redeem</button></aside>
            {moves}
            <Link className="btn" to={"/char/addMove/" + this.props.match.params.id}>Add Move</Link><br />
            <button className="btn red" onClick={(e) => this.deleteCharacter()}>Delete</button>
          </div>
        </div>
      );
    }
}
  
export default CharacterPage;