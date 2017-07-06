import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
        <div>
         <ul>
           <li>
             <Link to="/test">Exercise</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
            <li>
             <Link to="/repos">Repos</Link>
           </li>
         </ul>
          {this.props.children}
        </div>
    );
  }
}

export default App;