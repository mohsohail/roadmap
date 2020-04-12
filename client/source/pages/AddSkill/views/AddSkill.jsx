import React, { Component } from 'react';

class AddSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        skillName: '',
        trackerType: 'simple',
        sessions: '',
        endDate: '',
      },
    };
  }

  handleSkillChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        skillName: event.target.value,
      },
    });
  };

  handleTrackerChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        trackerType: event.target.value,
      },
    });
  };

  handleSessionsChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        sessions: event.target.value,
      },
    });
  };

  handleEndDateChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        endDate: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    const { formData } = this.state;
    this.props.handleAddSkill(formData);
    event.preventDefault();
  };

  render() {
    const { skillName, trackerType, sessions, endDate } = this.state.formData;
    return (
      <div>
        <div>
          <h2>Add page</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="enter skill name"
                value={skillName}
                onChange={this.handleSkillChange}
              />
            </div>
            <div>
              <select name="trackerType" value={trackerType} onChange={this.handleTrackerChange}>
                <option value="simple">simple</option>
                <option value="strict">strict</option>
              </select>
            </div>
            {trackerType === 'simple' ? (
              <div>
                <input
                  type="text"
                  value={sessions}
                  onChange={this.handleSessionsChange}
                  placeholder="enter total sessions"
                />
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  value={endDate}
                  onChange={this.handleEndDateChange}
                  placeholder="end date"
                />
              </div>
            )}
            <div>
              <button type="submit">create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSkill;
