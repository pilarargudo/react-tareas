import React from 'react';
import './task.scss';

class Task extends React.Component {
  state = {
    newText: this.props.data.text,
  };

  handleChange = ev => {
    this.setState({ newText: ev.target.value });
  };
  isEnter = ev => {
    if (ev.keyCode === 13) {
      this.edit(ev);
    }
  };
  edit = ev => {
    let editedTask = {
      ...this.props.data,
      text: this.state.newText,
    };
    this.props.updateTask(editedTask);
    ev.target.blur();
  };
  markAsCompleted = () => {
    let editedTask = {
      ...this.props.data,
      completed: !this.props.data.completed,
    };
    this.props.updateTask(editedTask);
  };
  render() {
    return (
      <div className={'task ' + (this.props.data.completed ? 'completed' : '')}>
        <input type='text' value={this.state.newText} onChange={this.handleChange} onKeyUp={this.isEnter} onBlur={this.edit} />

        <div className='actions'>
          <button onClick={() => this.props.deleteTask(this.props.data.id)}>delete</button>
          <button onClick={this.markAsCompleted}>completed</button>
        </div>
      </div>
    );
  }
}

export default Task;
