import React, { Component } from 'react';

import { capFirstLetter } from '../components/functions.js';
import conditionImages from '../Images.js';

class ConditionRow extends Component {
    render() {
      if( this.props.enabled === "yes" ) {
        return(
          <div className="Condition">
            <button onClick={(e) => this.props.handleClick(this.props.condition)}>
              <img className="ConditionImage" src={conditionImages[this.props.index]} alt={this.props.condition} />
              <p className="ConditionTitle"><strong>{capFirstLetter(this.props.condition)}</strong></p>
              <p className="ConditionDescription">{this.props.description}</p>
            </button>
          </div>
        );
      }
      else {
        return(
          <div className="Condition Disabled">
              <img className="ConditionImage" src={conditionImages[this.props.index]} alt={this.props.condition} />
              <p className="ConditionTitle"><strong>{capFirstLetter(this.props.condition)}</strong></p>
              <p className="ConditionDescription">{this.props.description}</p>
          </div>
        );
      }
    }
  }
  
  export default ConditionRow;