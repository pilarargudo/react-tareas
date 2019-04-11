import React from 'react';
import './task.scss';


class Task extends React.Component {
    state = {
        newText: this.props.data.text
    }

    handleChange = (ev) => {
        this.setState({ newText: ev.target.value });
    }
    isEnter = ev => {
        if(ev.keyCode === 13) {
            this.edit(ev)
        }
    }
    edit = (ev) => {
        let editedTask = {
            ...this.props.data,
            text: this.state.newText
        }
        this.props.updateTask(editedTask);
        ev.target.blur();
    }
    render () {
        return (
          <div className='task'>

            <input type='text' value={this.state.newText} onChange={this.handleChange}  onKeyUp={this.isEnter} onBlur={this.edit}/>

            <div className='actions'>
              <button onClick={() => this.props.deleteTask(this.props.data.id)}>delete</button>
            </div>
          </div>
        );
    }
}

export default Task;
