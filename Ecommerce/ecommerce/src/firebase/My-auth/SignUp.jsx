import React from 'react'
import {auth} from '../firebase'
import {Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from '../firebase/auth'

const SignUp = () => 
{
  const [formDetails, setFormDetails] = useState({
     
    email: '',
    password:''
})
const handleSubmit = (e) =>
{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formDetails.email, formDetails.password)
        .then((user) =>
        {
            console.log(user)
            alert("user registered successfully")
        })
    .catch((err)=>console.log(err))
}
return (
<div className='container border-2 border-black'>
  <p>
    Already Having an Account? <Link to='/Signin'>SignIn</Link>
  </p>
  <form
    action=''
    className='form'
    onSubmit={handleSubmit}>
    <br />
    <label htmlFor='email'>Email</label> <br />
    <input
      type='email'
      className=' form-control'
      id='email'
      name='email'
      onChange={(e) =>
        setFormDetails({ ...formDetails, email: e.target.value })
      }
    />
    <br />
    <label htmlFor='pwd'>Password</label> <br />
    <input
      type='password'
      className=' form-control'
      id='pwd'
      name='password'
      onChange={(e) =>
        setFormDetails({ ...formDetails, password: e.target.value })
      }
    />
    <br />
    <button
      type='submit'
      className='button'>
      Signup
    </button>
  </form>
</div>
)
  
}

export default SignUp
