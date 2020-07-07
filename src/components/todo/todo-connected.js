import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import './todo.scss';
const todoAPI = 'https://access-denied-lab-32.herokuapp.com/todo';
const ToDo = () => {
  const [list, setList] = useState([]);
  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };
  
  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    let index = list.indexOf(item);
    console.log(index,'index');
    if (item._id) {
      item.complete = !item.complete;
      fetch(todoAPI, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
        .then(response => response.json())
        .then(savedItem => {
          console.log('savedItemsavedItemsavedItem',savedItem);
          list[index] = savedItem;
          setList([...list]);
        })
        .catch(console.error);
    }
  };
  const handleUpdate =(i) =>{
    // listAll.splice(1,1)
    let input = document.getElementsByName(i)[0].value;
    list[i].text = input;
    console.log('arrarrarrarr',list);
    fetch(todoAPI, {
      method: 'put',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(list[i]),
    })
      .then(response => response.json())
      .then(savedItem => {
        console.log('savedItemsavedItemsavedItem',savedItem);
        setList([...list]);
      })
      .catch(console.error);
    setList(list);
  };
  const handleDelete =(_id) =>{
    // let item = list.filter(i => i._id === _id)[0] || {};
    // let index = list.indexOf(item);
    axios.delete(todoAPI, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        _id:_id,
      },
    })
      .then(afterDelete => {
        // list.splice(index,1);
        window.location.reload(true);
      })
      .catch(console.error);
  };
  // empty response: {}
  const _getTodoItems = () => {
    axios.get(todoAPI)
      .then(res => {
        console.log(res);
        
        setList(res.data);
      }, [])
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(_getTodoItems, []);
  // useEffect(_toggleComplete, list);
  return (
    <><div>
      <Alert color="success" className="task">
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </Alert>
    </div>
    <section className="todo">
      <div>
        <TodoForm handleSubmit={_addItem} />
      </div>
      <div>
        <TodoList
          list={list}
          handleComplete={_toggleComplete}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        /> 
      </div>
    </section>
    </>
  );
};
export default ToDo;