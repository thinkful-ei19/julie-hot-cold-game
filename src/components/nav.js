import React from 'react';
import './nav.css';

export default function Nav(){
//   function newGame(event) {
//     event.preventDefault();
//   } 

  const links = (
      <ul>
          <li>
             <a href="#" className="what"> What? </a>
          </li>
          <li>
             <a href="#" className="new"> New Game </a>
          </li>
      </ul>
  )

  return (
      <div className="nav-bar">
        <ul> {links} </ul>
      </div>
  )
}