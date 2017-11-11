import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLandingPageJobs, formSubmitAction } from './actions/actions';

class App extends Component {

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
    if (!this.props.formOutput && this.props.landingPageValues) {
      console.log(this.props);
      formResults = this.props.landingPageValues.map((job, index) =>
        <li key={index}> {job} </li>
      );
    }
    else if (this.props.formOutput) {
      console.log(this.props);
      formResults = this.props.formOutput.map((job, index) =>
        <li key={index}> {job} </li>
      );
    }
    else {
      formResults = <li>No results were found!</li>
    }
    return (
      <div>
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
