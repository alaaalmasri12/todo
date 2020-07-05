import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

// import the css file
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm(props) {

  const [allitem, setitem] = useState({});

 const handleInputChange = e => {
    setitem({...allitem, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(allitem);
    const item = {};
    setitem( item );
  };

    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
        <Card style={{ width: '18rem' }}>
       <Card.Body>
          <Form.Label>
            <span>To Do Item</span>
            <Form.Control type="text" name="text"  placeholder="Add To Do List Item" onChange={handleInputChange} />
          </Form.Label>
          <Form.Label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Label>
          <Form.Label>
            <span>Assigned To</span>
            <Form.Control type="text" name="assignee"  placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Label>
          <Button type="submit" >Add Item</Button>
          </Card.Body>
          </Card>
        </Form>
       
      </>
      
      
    );
}
export default TodoForm;
