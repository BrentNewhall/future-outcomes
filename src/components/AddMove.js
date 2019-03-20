import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OutcomeRows from './OutcomeRows.js';
import { moves } from '../Moves.js';
import { capFirstLetter } from './functions.js';

class AddMove extends Component {
    constructor( props ) {
      super( props );
      this.outcomeClicked = this.outcomeClicked.bind( this );
    }
    
    moveSelected( moveID ) {
      let characters = this.props.characters;
      characters[this.props.match.params.id].moves.push( moveID );
      const setCharacters = () => new Promise( (resolve, reject) => {
        localStorage.setItem( "characters", characters );
        resolve();
      });
      setCharacters().then( this.props.history.push( "/char/" + this.props.match.params.id ) );
    }
  
    outcomeClicked( event ) {
      return;
    }
  
    render() {
      let lastType = '';
      let tables = moves.map( (move,moveIndex) => {
        if( this.props.characters[this.props.match.params.id].moves.indexOf( move.id ) >= 0 ) {
          return <div key={moveIndex}></div>;
        }
        let headerText = '';
        if( move.type !== lastType ) {
          headerText = <h2>{capFirstLetter(move.type)} Moves</h2>;
        }
        lastType = move.type;
        let description = '';
        if( move.description ) {
          description = <em>{move.description}</em>
        }
        return( <div key={moveIndex} className="Outcome col m6">
                  {headerText}
                  <div className="OutcomeTitle">
                    <button className='OutcomeButton btn' onClick={(e) => this.moveSelected(move.id)}>
                      {move.title}
                    </button>
                  </div>
                  <div className="OutcomeContent">
                    {description}
                    <table>
                    <thead><tr><th>Roll</th><th>Outcome</th></tr></thead>
                    <tbody><OutcomeRows move={move} highlights={[]} outcomeClickedHandler={this.outcomeClicked()} /></tbody>
                    </table>
                  </div>
                </div> );
      });
      return( 
        <div className="App">
          <nav><Link to="/">Home</Link></nav>
          <div className="container">
            <header>
              <h1>Add Move</h1>
            </header>
            {tables}
            <Link to={"/char/" + this.props.match.params.id}>&lt; Back</Link>
          </div>
        </div>
      );
    }
  }
  
  export default AddMove;