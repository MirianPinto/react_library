
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import validator from '../utils/validator';
import { useNavigate } from 'react-router-dom';

function Modal(props) {
  
  console.log("Hola",props)
 
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style ={{color:"white"}}>Email </Form.Label>
        <Form.Control 
         placeholder="Enter Email "
         />
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style ={{color:"white"}}>Password</Form.Label>
        <Form.Control placeholder="Password" 
        
        onChange={(e) => {
        }}
        />

      </Form.Group>
        {props.Boton}
    </Form>
    
    <Form.Text
    style={{
      color: "red",
    }}
  >
    
  </Form.Text>
    </>
  );
}

export default Modal;