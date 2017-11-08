import React, { Component } from 'react';
import './App.css';
let API_URL = `https://jobs.github.com/positions.json`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      outputText: "Placeholder text where result would show"
    }
  }


  componentWillMount() {
    fetch(`${API_URL}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(data => {
        console.log(data)
      }).catch(err =>
        console.log(`This error showed up: ${err}`)
      )
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = {
      skill: this.skill.value,
      location: this.location.value
    }
    fetch(`${API_URL}?description=${formData.skill}&location=${formData.location}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(`This error showed up: ${err}`)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p><input type="text" size="30" ref={(input) => { this.skill = input }}
            placeholder="Main Skill" /></p>
          <p><input type="text" size="30" ref={(input) => { this.location = input }}
            placeholder="Location" /></p>
          <button>Add Item</button>
        </form>

        <div>{this.state.outputText}</div>
      </div>
    );
  }
}

export default App;
