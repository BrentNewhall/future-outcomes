import React, { Component } from 'react';

import OutcomeRows from './OutcomeRows.js';
import { moves } from '../Moves.js';

class Outcome extends Component {
    constructor( props ) {
      super( props );
      this.state = {
        title: '',
        content: '',
      }
      this.highlights = ['','','','','',''];
      this.id = props.id;
      this.outcomeClicked = this.outcomeClicked.bind( this );
      this.outcomeClickHandler = this.outcomeClickHandler.bind( this );
      this.redeemLuck = this.redeemLuck.bind( this );
    }
  
    componentDidMount() {
      this.generateOutcomes();
    }
  
    componentDidUpdate( prevProps, prevState, snapshot ) {
      if( this.props.luck < prevProps.luck  &&  this.highlights.includes("highlight") ) {
        this.redeemLuck();
      }
    }
  
    outcomeClickHandler( event ) {
      // Only update if this is a highlighted row
      if( ! event.target.getAttribute("class").includes( "highlight" ) ) {
        return;
      }
      // If this is a bad row, increase luck
      if( event.target.getAttribute("class").includes( "bad" ) ) {
        this.props.addLuckPoint();
      }
      // Clear all selected outcomes
      for( let index in this.highlights ) {
        this.highlights[index] = '';
      }
      this.generateOutcomes();
    }
  
    generateOutcomes() {
      moves.forEach( (move) => {
        if( move.id === this.id ) {
          let outcomes = <OutcomeRows move={move} highlights={this.highlights} outcomeClickHandler={this.outcomeClickHandler} redeemLuck={this.redeemLuck} />;
          this.setState( { title: move.title, content: outcomes } );
        }
      });
    }
  
    outcomeClicked(id) {
      for( let index in this.highlights ) {
        this.highlights[index] = '';
      }
      let outcome1 = parseInt( Math.random() * 6 );
      let outcome2 = parseInt( Math.random() * 6 );
      if( outcome1 === outcome2 ) {
        outcome2 = 5 - outcome2;
      }
      this.highlights[outcome1] = 'highlight';
      this.highlights[outcome2] = 'highlight';
      this.generateOutcomes();
    }
  
    redeemLuck() {
      if( this.highlights[4] !== ''  &&  this.highlights[5] !== '' ) {
        return;
      }
      if( this.highlights[3] !== ''  &&  this.highlights[5] !== '' ) {
        this.highlights[3] = '';
        this.highlights[4] = 'highlight';
      }
      else {
        for( let index = 4; index >= 0; index-- ) {
          if( this.highlights[index] === 'highlight' ) {
            this.highlights[index+1] = 'highlight';
            this.highlights[index] = '';
          }
        }
      }
      this.generateOutcomes();
    }
  
    render() {
      let tbodyContent = [];
      if( typeof this.state.content === "object" ) {
        tbodyContent = this.state.content;
      }
      return (
        <div className="Outcome col m6">
          <div className="OutcomeTitle">
            <button className='OutcomeButton btn' onClick={(e) => this.outcomeClicked(this.id)}>
              {this.state.title}
            </button>
          </div>
          <div className="OutcomeContent">
            <table>
              <thead><tr><th>Roll</th><th>Outcome</th></tr></thead>
              <tbody>{tbodyContent}</tbody>
            </table>
          </div>
        </div>
      );
    }
  }
  
export default Outcome;