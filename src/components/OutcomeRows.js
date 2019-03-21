import React, { Component } from 'react';

class OutcomeRows extends Component {
    render() {
      let outcomes = this.props.move.outcomes.map( (outcome, index) => {
        let specialClass = 'bad';
        if( index >= this.props.move.lastNegative ) {
          specialClass = 'good';
        }
        let highlight = '';
        if( this.props.highlights ) {
          highlight=this.props.highlights[index];
        }
        return <tr key={'move' + this.props.move.id + '.' + index}>
                 <td className={'OutcomeNumber ' + specialClass}>{index+1}</td>
                 <td className={'OutcomeDescription ' + highlight + ' ' + specialClass} onClick={(e) => this.props.outcomeClickHandler(e)}>{outcome}</td>
               </tr>;
      });
      return outcomes;
    }
  }
  
export default OutcomeRows;