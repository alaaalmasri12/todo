import React from 'react';
import Footer from './components/footer/footer';
import ToDo from './components/todo/todo-connected';
import Header from './components/header/header.js';
import SettingsContext from './context/auth/context';
function App() {
  return (
    <React.Fragment>
      <SettingsContext>
      <Header />
      <ToDo />
      </SettingsContext>
      <Footer/>
     
      
    </React.Fragment>

  )
}
export default App;
