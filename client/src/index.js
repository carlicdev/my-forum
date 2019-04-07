import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context';

ReactDOM.render((
    <AppProvider>
        <Router>
           <App />
        </Router>
    </AppProvider>
), document.getElementById('root'));
    
