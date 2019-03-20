import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { connect } from 'react-redux';
import './App.css';

import OutcomeRows from './components/OutcomeRows.js';
import AddCondition from './components/AddCondition.js';
import { capFirstLetter } from './components/functions.js';
import { moves } from './Moves.js';
import store from './store.js';
import {
  createNewCharacter,
  setCharacters,
  deleteCharacter
} from './actions.js';
import conditionImages from './Images.js';

//const ReactMarkdown = require( 'react-markdown' );

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
      localStorage.setItem( "characters", characters );
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
    let redeemClasses = "RedeemButton";
    if( this.state.luckPoints === 0 ) {
      redeemClasses += " Disabled";
    }
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
        <nav><Link to="/">Home</Link></nav>
        <div className="container">
          <header>
            <h1>{this.state.name}</h1>
          </header>
          <div className="Conditions">{conditions}</div>
          <Link className="btn" to={"/char/addCondition/" + this.props.match.params.id}>Add Condition</Link><br />
          Hurt:
          <div className="progress"><div className="determinate" style={hurtStyle}></div></div>
          <button className="btn hurt" onClick={() => this.removeHurt()}>-</button>
          <button className="btn hurt" onClick={() => this.addHurt()}>+</button>
          <aside>Luck: {this.state.luckPoints}<button className={redeemClasses} onClick={(e) => this.redeemLuck(e)}>Redeem</button></aside>
          {moves}
          <Link className="btn" to={"/char/addMove/" + this.props.match.params.id}>Add Move</Link><br />
          <button className="btn red" onClick={(e) => this.deleteCharacter()}>Delete</button>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  constructor( props ) {
    super( props );
    this.newCharName = React.createRef();
    this.createCharacter = this.createCharacter.bind( this );
    this.updateStorage = this.updateStorage.bind( this );
  }

  componentDidMount() {
    if( this.props.characters === undefined ) {
      this.hydrate();
    }
  }

  hydrate() {
    if( localStorage.getItem("characters") !== 'undefined' ) {
      store.dispatch( setCharacters( JSON.parse(localStorage.getItem("characters")) ) );
    }
  }

  updateStorage() {
    localStorage.setItem( "characters", JSON.stringify(this.props.characters) );
  }

  createCharacter( evt ) {
    const addChar = () => new Promise( (resolve, reject) => {
      store.dispatch( createNewCharacter(this.newCharName.current.value,['default','physical-combat','negotiation'],0,[]) );
      resolve();
    })
    addChar().then( this.updateStorage );
  }

  render() {
    let characters = [];
    if( this.props.characters !== undefined ) {
      this.props.characters.forEach( (character,index) => {
        characters.push( <li key={index}><Link to={"/char/" + index}>{character.name}</Link></li> );
      });
    }
    return (
      <div className="App">
        <nav><Link to="/">Home</Link></nav>
        <div className="container">
          <header>
            <h1>Future Outcome</h1>
          </header>
          <h2>Characters</h2>
          <ul>
            {characters}
          </ul>
          <h2>Create Character</h2>
          <label htmlFor="new-character-name">Name:</label><input type="text" name="new-character-name" id="new-character-name" ref={this.newCharName} /> <button onClick={(e) => this.createCharacter(e)}>Create</button>
        </div>
      </div>
    )
  }

}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/char/:id" component={CharPage} />
          <Route exact path="/char/addMove/:id" component={AddMovePage} />
          <Route exact path="/char/addCondition/:id" component={AddConditionPage} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.characters
})

const HomeConnected = connect()(Home);
const HomePage = connect(mapStateToProps)(HomeConnected);

const CharPageConnected = connect()(CharacterPage);
const CharPage = connect(mapStateToProps)(CharPageConnected);

const AddMoveConnected = connect()(AddMove);
const AddMovePage = connect(mapStateToProps)(AddMoveConnected);

const AddConditionConnected = connect()(AddCondition);
const AddConditionPage = connect(mapStateToProps)(AddConditionConnected);

export default App;