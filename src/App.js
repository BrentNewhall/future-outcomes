import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { connect } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar.js';
import CharacterPage from './components/CharacterPage.js';
import AddCondition from './components/AddCondition.js';
import AddMove from './components/AddMove.js';
import Help from './components/Help.js';
import Civilizations from './components/Civilizations.js';
import Enemies from './components/Enemies.js';
import store from './store.js';
import {
  createNewCharacter,
  setCharacters
} from './actions.js';

//const ReactMarkdown = require( 'react-markdown' );

class Home extends Component {
  constructor( props ) {
    super( props );
    this.newCharName = React.createRef();
    this.createCharacter = this.createCharacter.bind( this );
    this.updateStorage = this.updateStorage.bind( this );
  }

  componentDidMount() {
    this.hydrate();
  }

  hydrate() {
    if( localStorage.getItem("characters") !== null ) {
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
      <div>
        <header>
          <h1>Future Outcome</h1>
        </header>
        <h2>Characters</h2>
        <ul>
          {characters}
        </ul>
        <hr />
        <h2>Create Character</h2>
        <label htmlFor="new-character-name">Name:</label><input type="text" name="new-character-name" id="new-character-name" ref={this.newCharName} />
        <button className="btn" onClick={(e) => this.createCharacter(e)}>Create</button>
      </div>
    )
  }

}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/char/:id" component={CharPage} />
            <Route path="/char/addMove/:id" component={AddMovePage} />
            <Route path="/char/addCondition/:id" component={AddConditionPage} />
            <Route path="/civs" component={CivilizationsPage} />
            <Route path="/help" component={HelpPage} />
            <Route path="/enemies" component={EnemyPage} />
          </div>
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

const HelpConnected = connect()(Help);
const HelpPage = connect(mapStateToProps)(HelpConnected);

const CivilizationsConnected = connect()(Civilizations);
const CivilizationsPage = connect(mapStateToProps)(CivilizationsConnected);

const EnemyConnected = connect()(Enemies);
const EnemyPage = connect(mapStateToProps)(EnemyConnected);

export default App;