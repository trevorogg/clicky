import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav>
        <ul>
            <li className='brand animated lightSpeedIn'>
                <a href='/clicky-game/'>{props.title}</a>
            </li>

            <li id='rw'> {props.rightWrong}</li>

            <li id='cur-sco'>Current Score: {props.score}</li>
            <li id='high-sco'>High Score: {props.highScore}</li>
        </ul>
    </nav>
);

export default Nav;