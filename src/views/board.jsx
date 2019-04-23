import React, { Component } from 'react';
import './board.scss';
import Task from '../components/task.jsx';

// importamos redux
import { connect } from 'react-redux';


class Board extends Component {
  state = {
    newTaskText: '',
    // las tareas ya no van a llegar de este modo con localstorage
    //tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  };

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  addTask = text => {
    text = text.trim();
    if (text) {
      let newTask = {
        id: Date.now(),
        createAt: new Date(),
        text,
        completed: false,
      };
      // el estado ya no pasaría por aquí
      // this.setState({
      //   tasks: [newTask, ...this.state.tasks],
      //   newTaskText: ''

      // NOTE reemplazamos state por dispatch
      // NOTE OPCIÓN A
      this.props.dispatch({type: 'ADD_TODO', payload: newTask})
      // NOTE OPCIÓN B
      //this.props.addTask (text)
    }
  };

  editTask = task => {
    task = {
      ...task,
      updatedAt: new Date(),
    };

    this.setState({
      tasks: this.state.tasks.map(_task => (_task.id === task.id ? task : _task)),
    });
  };

  removeTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id),
    });
  };

  // NOTE estos dos eventos los podemos dejar como estado interno del componente
  handleChange = ev => {
    this.setState({ newTaskText: ev.target.value });
  };

  handleKeyUp = ev => {
    if (ev.keyCode === 13) {
      this.addTask(ev.target.value);
    }
  };

  render() {
    return (
      <div className='board'>
        <header>
          <input type='text' placeholder='add task' onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.newTaskText} />
        </header>
        <main className='tasks'>
          {this.props.tasks.map(task => (
              <Task data={task} deleteTask={this.removeTask} key={task.id} updateTask={this.editTask} />
          ))}
        </main>
      </div>
    );
  }
}

export default connect(
  // mapStatetoProps
  (state) => ({ 
    // creamos una prop llamada task que va a contener el estado global
    tasks: state.tasks,
    // otras props que podrían darse
    //isLogged: !state.token
  }), 
  // mapDispatchtoProps
  // si no la creas, connect la crea por defecto
  (dispatch) => ({
    // NOTE opción a
    dispatch
    // NOTE otra opción B  
    // addTask: (text) => { dispatch({
    //   type: 'ADD_TODO', 
    //   payload: {
    //     id: Date.now(),
    //     createAt: new Date(),
    //     text,
    //     completed: false,
    //   }
    // })}
  }),
)  (Board);
