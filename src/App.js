import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onChangeName = e => {
    this.props.updateName(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Change prop name from immutable model with Redux</h2>
          <input type='text' name='name' value={this.props.people.name} onChange={this.onChangeName} />
        </header>
      </div>
    );
  }
}

//State
const mapStateToProps = state => {
  return {
    people: state.PeopleReducer
  }
}

//Action
const updateName = payload => ({
  type: 'UPDATE_NAME',
  payload
})

//Map action
const mapDispatchToProps = (dispatch) => bindActionCreators({updateName}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
