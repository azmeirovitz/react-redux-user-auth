import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import About from './about';
import SecretList from './secret_list';
import {Route} from 'react-router-dom';


const App = () => (
    <div className="container">
        <Nav />

        <Route path="/about" component={About}/>
        <Route path="/secret-list" component={SecretList}/>

        {/* <h1 className="center">User Auth Demo</h1> */}
    
    </div>
);

export default App;

