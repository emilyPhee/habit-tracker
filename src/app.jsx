import React, { Component } from 'react';
import './app.css';
import AddForm from './components/addform';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Yoga', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      const count = habit.count - 1;
      if (habit.id === item.id) {
        return { ...habit, count: count > 0 ? count : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => {
      return habit.id !== item.id;
    });
    this.setState({ habits });
  };

  handleSubmit = name => {
    const uniqueId = Math.floor((1 + Math.random()) * 0x10000);

    const habits = [...this.state.habits, { id: uniqueId, name, count: 0 }];

    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          navbarCount={
            this.state.habits.filter(habit => habit.count > 0).length
          }
        />
        <AddForm handleSubmit={this.handleSubmit} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
