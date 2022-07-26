import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="habits">
        <input
          type="text"
          name="habit"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Habit"
          className="add-input"
        />
        <button
          type="button"
          onClick={() => {
            this.props.handleSubmit(this.state.value);
            this.setState({ value: '' });
          }}
          className="add-button"
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddForm;
