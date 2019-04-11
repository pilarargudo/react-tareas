import React, { Component } from 'react';
import './task.scss';

class Task extends Component {
    render() {
        return <div className='task'>{this.props.text}</div>;
    }
}

export default Task;
