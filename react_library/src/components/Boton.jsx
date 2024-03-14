import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Boton(props) {
    const history = useNavigate();

    
  return (
    <>
      <Button variant="primary" onClick={props.funcion}>
        {props.nombre}
      </Button>
    </>
  );
}

export default Boton;