import React from 'react'; 
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';

  function TodoList(props) {
    return (
      <ul>
      {props.list.map((item,i) => (
      
        <li        
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
             <Alert color="success">
             <span onClick={() =>props.handleComplete(item._id)}>
            {item.text}
          </span>    
       </Alert>
                    
          <Button variant="outline-danger" onClick={() =>props.handleDelete(item._id)}>Delete</ Button>
          <Button variant="outline-info" onClick={() => props.handleUpdate(i)}>Update </Button>
          <input type="text" name={i}  placeholder={'Update text '+item.text} />
         
        </li>
      ))}
    </ul>
    ); 
}

export default TodoList;
