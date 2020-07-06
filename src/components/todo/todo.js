import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert'

import './todo.scss';
var taskobject;
var counter = 0;
var taskcount = 0;
function ToDo(props) {

  const [listall, setList] = useState([]);

  const addItem = (item) => {
    taskcount++;
    item._id = ++counter;
    console.log(counter);
    item.complete = false;
    setList([...listall, item]);
    console.log('alaa', listall);
    listall.push(item);
    localStorage.setItem('todo', JSON.stringify(listall));
  }

  // const toggleComplete = id => {
  //   let item = listall.filter(i => i._id === id)[0] || {};
  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let list = listall.map(listItem => listItem._id === item._id ? item : listItem);
  //     list.pop();
  //     setList(list);
  //   }
  // }


  useEffect(() => {
    let gettask = localStorage.getItem('todo');
    taskobject = JSON.parse(gettask);
    gettask = taskobject || []
    setList(gettask);
  }, []);
  const handleDelete = (_id) => {
    taskcount--;
    let listToDelete = [_id];
    let result = listall.filter(el => (-1 == listToDelete.indexOf(el._id)));
    localStorage.setItem('todo', JSON.stringify(result));
    console.log('arrarrarrarr', result);
    setList(result);
  };
  const handleUpdate = (i) => {
    // listAll.splice(1,1)
    let input = document.getElementsByName(i)[0].value;
    listall[i].text = input;
    localStorage.setItem('todo', JSON.stringify(listall));
    console.log('arrarrarrarr', listall);
    setList(listall);
    window.location.reload(true);
  };
  return (
    <>
      <header>
        <Alert className="task" >
          <h2>
            To do List Manager ({listall.filter(item => !item.complete).length})</h2>
        </Alert>

      </header>
      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>
        <div>
          <TodoList
            list={listall}
            handleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            
          />
        </div>
        
       
      </section>
      <footer>
            <Navbar bg="dark">
                <Navbar.Brand>&copy; 2020 401d3</Navbar.Brand>
            </Navbar>
        </footer>
     
    </>
    
  );
}

export default ToDo;
