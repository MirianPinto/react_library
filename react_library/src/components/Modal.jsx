
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import validator from '../utils/validator';
import { useNavigate } from 'react-router-dom';

function Modal(props) {
  
  console.log("Hola", props.Titutlo1)
 
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style ={{color:"white"}}> {props.Titutlo1}  </Form.Label>
        <Form.Control 
         placeholder={props.placeholder1}
         />
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style ={{color:"white"}}>{props.Titutlo2}</Form.Label>
        <Form.Control placeholder={props.placeholder1}
        
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