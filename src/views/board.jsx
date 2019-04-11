import React, { Component } from 'react';
import './board.scss';

class Board extends Component {
    render() {
        return (
            <div className="board">
                <header>
                        <input type="text" placeholder="add task"/>
                </header>
                <main className="tasks">
                    <div className="task">
                        aprender react
                    </div>
                    <div className="task">
                        aprender jsx
                    </div>
                    <div className="task">
                        aprender redux
                    </div>
                </main>
            </div>
        );
    }
}

export default Board;
