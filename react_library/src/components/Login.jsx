import Modal from "./Modal"
import '../components/login.css'
const Login = () =>
{
    return (
        <>
        <header id='header'>
        <h1 style={{color:"white", padding:"10px",paddingLeft:"50px"}}>LOG IN</h1>
        
        </header>
  
        <section id='backgroundLogin'>
        <div className='formularioLogin'>
              <Modal/>
          </div>
        </section>
  
        <footer id='Footer'></footer>
      </>
    )
}

export default Login;