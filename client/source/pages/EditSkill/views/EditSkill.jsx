import React, { Component } from 'react';

class EditSkill extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('getderived props state', nextProps.skillData, prevState);
    if (
      nextProps.skillData.status !== prevState.formData.status &&
      nextProps.skillData.status === 2
    ) {
      return {
        formData: nextProps.skillData,
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      formData: props.skillData,
    };
    // console.log('state', this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('cDU', prevProps, prevState);
  }

  handleSkillChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        data: {
          ...this.state.formData.data,
          skillName: event.target.value,
        },
      },
    });
  };

  handleTrackerChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        data: {
          ...this.state.formData.data,
          trackerType: event.target.value,
        },
      },
    });
  };

  handleSessionsChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        data: {
          ...this.state.formData.data,
          sessions: event.target.value,
        },
      },
    });
  };

  handleEndDateChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        data: {
          ...this.state.formData.data,
          endDate: event.target.value,
        },
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let payload = this.state.formData.data;
    this.props.updateSkill(payload);
  };

  render() {
    if (this.props.skillData.status !== 2 && this.state.formData.status !== 2) {
      return null;
    }
    // console.log('render', this.props, this.state);
    const { skillName, trackerType, sessions, endDate } = this.state.formData.data;
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
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditSkill;
