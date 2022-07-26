import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.handleIncrement}
              onDecrement={this.props.handleDecrement}
              onDelete={this.props.handleDelete}
            />
          ))}
        </ul>
        <button
          onClick={() => this.props.handleReset()}
          className="habits-reset"
        >
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
