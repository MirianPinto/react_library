
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import validator from '../utils/validator';
import { useNavigate } from 'react-router-dom';


function Modal() {
  
  const history = useNavigate();

  function handleSubmit (e)
  {
    history("/Home")
  }
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style ={{color:"white"}}>Email </Form.Label>
        <Form.Control 
        type="email"
         placeholder="Enter Email "
         
         onChange={(e) => {
        //  console.log(e.target.value);
        //  setform({ ...form, email: e.target.value });
          }}
         
         />
           
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style ={{color:"white"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        
        onChange={(e) => {
          //console.log(e.target.value);
          //setform({ ...form, password: e.target.value });
        }}
        />
      </Form.Group>
     
        
      <Button variant="primary" type="submit">
        Submit
      </Button>

          
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