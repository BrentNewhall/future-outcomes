import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ConditionRow from './ConditionRow.js';

class AddCondition extends Component {
    constructor( props ) {
      super( props );
      this.conditionSelected = this.conditionSelected.bind( this );
    }
    
    conditionSelected( condition ) {
      let characters = this.props.characters;
      characters[this.props.match.params.id].conditions.push( condition );
      const setCharacters = () => new Promise( (resolve, reject) => {
        localStorage.setItem( "characters", characters );
        resolve();
      });
      setCharacters().then( this.props.history.push( "/char/" + this.props.match.params.id ) );
    }
  
    render() {
      let conditions = this.props.characters[this.props.match.params.id].conditions;
      return( 
        <div className="App">
          <nav><Link to="/">Home</Link></nav>
          <div className="container">
            <header>
              <h1>Add Condition</h1>
            </header>
            <div className="Conditions">
              <ConditionRow index='0' condition='distracted' enabled={ conditions.includes("distracted") ? "no" : "yes" } description="You have difficulty focusing." handleClick={this.conditionSelected} /> }
              <ConditionRow index='1' condition='immobilized' enabled={ conditions.includes("immobilized") ? "no" : "yes" } description="You're rooted to the spot." handleClick={this.conditionSelected} />
              <ConditionRow index='2' condition='pumped' enabled={ conditions.includes("pumped") ? "no" : "yes" } description="You're on fire! Not literally." handleClick={this.conditionSelected} />
              <ConditionRow index='3' condition='stunned' enabled={ conditions.includes("stunned") ? "no" : "yes" } description="You can barely think." handleClick={this.conditionSelected} />
            </div>
            <br />
            <Link to={"/char/" + this.props.match.params.id}>&lt; Back</Link>
          </div>
        </div>
      );
    }
  }
  
export default AddCondition;  