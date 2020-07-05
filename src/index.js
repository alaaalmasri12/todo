import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
function Main()
{
  return(
    <React.Fragment>
    <App />
  </React.Fragment>
  )
 
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
