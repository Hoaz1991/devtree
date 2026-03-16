import { Link } from 'react-router-dom'

export default function RegisterView(){
    return(
        <>
        <nav >
            <Link to="/auth/login"> 
            ya tienes una cuenta? Inicia sesion
            </Link>
        </nav>


        </>

        
    )
}