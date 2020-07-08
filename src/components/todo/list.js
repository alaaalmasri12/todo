import React, { useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/auth/context';
import SettingsContex1 from '../../context/auth/context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

function TodoList(props) {
  const context = useContext(SettingsContext);
  return (
    <>

      <ul>

        <Form.Control type="Number" name='pages' placeholder={'number pages'} />
        <Button onClick={() => context.pages(props.list)}>Number of element</Button>
        {props.list.sort((a, b) => (a.difficulty > b.difficulty) ? 1 : ((b.difficulty > a.difficulty) ? -1 : 0)).slice(context.start, context.count).map((item, i) => (

          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
            <span >{item.difficulty}</span>
            <Button variant="danger" onClick={() => props.handleDelete(item._id)}>Delete </Button>
            <Button variant="primary" bg="primary" onClick={() => props.handleUpdate(i)}>Update </Button>
            <Form.Control type="text" name={i} placeholder={'Update text ' + item.text} />
          </li>
        ))}
      </ul>
      <ul>
        {context.array.map((item, i) => (
          <li
            key={item}
          >
            <Pagination.Item><button onClick={() => context.view(i)}>{i + 1}</button></Pagination.Item>

          </li>
        ))}
      </ul>
      <div>
        <SettingsContex1 list={props.list} />
      </div>
    </>
  );
}

export default TodoList;