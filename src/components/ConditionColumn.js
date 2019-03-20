import React, { Component } from 'react';

class ConditionColumn extends Component {
    render() {
      return (
        <div className="Condition">
          <button className="ConditionButton" onClick={(e) => this.props.confirm(this.props.condition)}>
            <img src={this.props.src} className="ConditionImage" alt={this.props.condition} />
          </button>
          {this.props.condition}
        </div>
      );
    }
  }
  
export default ConditionColumn;  