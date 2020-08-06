import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  url = 'http://localhost:8080/persons';

  state = {
    skillInputValue: '',
    nameInputValue: '',
    persons: [],
    skills: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let name = this.state.nameInputValue;

    if (name.length < 1) {
      return;
    }

    let requestBody = {
      person: {
        // name = name (if key egal cu value)
        name,
        skills: this.state.skills,
      },
    };

    axios.post(this.url, requestBody).then((result) => {
      if (result.data.success === true) {
        this.buildPersonList();
        this.setState({
          skills: [],
        });
      }
    });
  };

  handleNameChange = (event) => {
    this.setState({
      nameInputValue: event.target.value,
    });
  };

  handleSkillChange = (event) => {
    this.setState({
      skillInputValue: event.target.value,
    });
  };

  addSkill = (event) => {
    if (this.state.skillInputValue.length < 1) {
      return;
    }

    this.setState({
      skills: [...this.state.skills, this.state.skillInputValue],
    });
    // empty the skill input
    event.target.previousElementSibling.value = '';
  };

  buildPersonList = () => {
    axios.get(this.url).then((result) => {
      this.setState({
        persons: result.data.persons,
      });
    });
  };

  componentDidMount = () => {
    this.buildPersonList();
  };

  render = () => {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nume"
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="skills">Skills: </label>
            <input
              type="text"
              name="skills"
              id="skills"
              placeholder="Skill"
              onChange={this.handleSkillChange}
            />
            {/* onClick is addEventListener */}
            <button type="button" onClick={this.addSkill}>
              +
            </button>
          </div>
          {this.state.skills.length > 0 && (
            <ul>
              {this.state.skills.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          )}

          <div>
            <button type="submit" onClick={this.handleSubmit}>
              Trimite
            </button>
          </div>
        </form>
        {/* the way react works - conditie -  && - 'cod de executat' */}
        {this.state.persons.length > 0 && (
          <ul>
            {/* map is jS method kinda like forEach */}
            {this.state.persons.map((person) => {
              return (
                <li>
                  {person.name}
                  {person.skills.length > 0 && (
                    <ul>
                      {person.skills.map((skill) => {
                        return <li>{skill}</li>;
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };
}
