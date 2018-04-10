import React from 'react';
import Game from './game';
import Feedback from './feedback';
import Nav from './nav';

export default function App(){
    return(
        <div>
            <Nav />
            <Game />
            <Feedback />
        </div>
    )
}