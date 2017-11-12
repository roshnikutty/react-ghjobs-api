import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLandingPageJobs, formSubmitAction } from './actions/actions';
import './App.css';

export class App extends Component {
  componentWillMount(props) {
    this.props.dispatch(getLandingPageJobs())
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = {
      skill: this.skill.value,
      location: this.location.value
    }
    this.props.dispatch(formSubmitAction(formData));
  }

  render() {
    let formResults;

    if (this.props.landingPageValues.length && !this.props.formOutput.length) {
      formResults = this.props.landingPageValues.map((job, index) =>
        <li key={index}>
          <p>ROLE: {job.title} </p>
          <p>TYPE: {job.type}</p>
          <p>DESCRIPTION: {job.description}</p>
          <hr />
        </li>
      );
    }

    else if (this.props.formOutput.length) {
      formResults = this.props.formOutput.map((job, index) =>
        <li key={index}>
          <p>ROLE: {job.title} </p>
          <p>TYPE: {job.type}</p>
          <p>DESCRIPTION: {job.description}</p>
          <hr />
        </li>
      );
    }
    else {
      formResults = <li>No results were found!</li>
    }
    return (
      <div>
          <h1>Tech job finder - UI for GitHub service</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p><input type="text" size="30" ref={(input) => { this.skill = input }}
            placeholder="Main Skill" /></p>
          <p><input type="text" size="30" ref={(input) => { this.location = input }}
            placeholder="Location" /></p>
          <button>Add Item</button>
        </form>

        <div>
          <ul>{formResults}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  landingPageValues: state.landingPageValues,
  formOutput: state.formOutput
})
export default connect(mapStateToProps)(App);
