import React, { Component } from 'react';

class AddSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillName: '',
      trackerType: 'simple',
      sessions: '',
      endDate: '',
      currentSession: '',
      currentDate: '',
    };
  }

  handleSkillChange = (event) => {
    this.setState({
      skillName: event.target.value,
    });
  };

  handleTrackerChange = (event) => {
    this.setState({
      trackerType: event.target.value,
    });
  };

  handleSessionsChange = (event) => {
    this.setState({
      sessions: event.target.value,
    });
  };

  handleEndDateChange = (event) => {
    this.setState({
      endDate: event.target.value,
    });
  };

  handleSubmit = () => {};

  render() {
    const { skillName, trackerType, sessions, endDate } = this.state;
    return (
      <div>
        <div>
          <h2>Edit page</h2>
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
          </form>
        </div>
      </div>
    );
  }
}

export default AddSkill;
