import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [array, setTitle] = useState([1]);
  const [start, setStart] = useState(0);
  const [count, setcount] = useState();
  
  const pages = function (list){
    let number = document.getElementsByName('pages');
    console.log('number',number);
    let newarr = new Array(Math.ceil(list.length/(number[0].value)));
    setTitle([...newarr]);
  };

  const view = function(i){
    let number = document.getElementsByName('pages')[0].value;
    let end =Number(number) + (number*i);
    setStart(Number(number*i));
    setcount(end);
  };
  
  const state = {
    array,
    changeTitleTo: setTitle,
    pages: pages,
    view:view,
    start,
    count,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;