import { useState } from "react";
import * as usersService from '../../utilities/fights-api'; 

class FightForm extends Component {
  state = {
    title: '',
    description: '',
    date: '',
    location: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    createFight(this.state)
      .then(() => {
        // handle what should happen after the fight is created
      })
      .catch(error => {
        // handle any errors
        console.error(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={this.handleChange} value={this.state.title} required />
        </label>
        <label>
          Description:
          <textarea name="description" onChange={this.handleChange} value={this.state.description} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" onChange={this.handleChange} value={this.state.date} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" onChange={this.handleChange} value={this.state.location} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FightForm;