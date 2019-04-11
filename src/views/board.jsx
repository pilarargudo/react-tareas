import React, { Component } from 'react';
import './board.scss';
import Task from '../components/task.jsx';


class Board extends Component {
  render() {
    return (
      <div className='board'>
        <header>
          <input type='text' placeholder='add task' />
        </header>
        <main className='tasks'>
                <Task text="aprender react" />
                <Task text="aprender jsx"/>
        </main>
      </div>
    )
  }
}

export default Board;
