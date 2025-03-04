import React from "react";
import "./App.css";

import { connect } from 'react-redux'
import { getData } from '../actions'
import FormWithFormik from './form.js'
import Smurf from './cards.js'

const App = props => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {/* <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div> */}
      <FormWithFormik />
      <button onClick={props.getData}>Check out our smurfs here</button>
      {props.smurfs.map(person =>
        <Smurf key={person.id} person={person} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    test: state.test,
    smurfs: state.smurfs
  }
}
  export default connect(mapStateToProps, { getData })(App);