import { useEffect } from 'react';
import { getAllUsers, getUserByID} from '../../../api/fetchUrlUser';
import { LoginPageStyles } from '..';
import { Link } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
// import { useRef, useEffect, startTransition, lazy, Suspense, LazyExoticComponent, ComponentType  } from "react";
// import { useNavigate } from "react-router";
// import { useState, ChangeEventHandler, MouseEventHandler } from "react";
// import { UserFormState } from "../../types/authContext";
// type User = UserFormState & { id: number };
// const LazyInput: LazyExoticComponent<ComponentType<any>> = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       return resolve(import("../inputsform/InputForm"));
//     }, 3000);
//   });
// });


// const InitialValue: UserFormState = {
//   id: Date.now(),
//   name: "",
//   password: "",
//   isLogged: true,
// };
// export const Login = () => {
//   const [form, setForm] = useState(InitialValue);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);
//   const navigate = useNavigate();

//   const handleSubmit = (user: UserFormState) => {

//     startTransition(  () => {
//       setTimeout(() => {
//         setForm({ ...form, id: Date.now() });
//       }, 2000);
//       localStorage.setItem("form", JSON.stringify(form));
//     })
//   };

//   const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
//     const name = target.name as keyof UserFormState;
//     setForm({ ...form, [name]: target.value });
//   };

//   const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
//     e.preventDefault();

//     startTransition(() => {
//       if (form.name.trim() !== "" || form.password.trim() !== "") {
//         handleSubmit(form);
//         setForm(InitialValue);
//         navigate("/home");
//       } else {
//         return;
//       }
//     })
//   };

//   return (
//     <>
//       <LoginContainer>
//         <h2 className="logincontainer__h2">Log In </h2>

//         <div className="logincontainer__div">
        

//           <Suspense fallback={<LoginLoader/>}><LazyInput inputRef={inputRef} placeholder="Insert user name" type="text" name="name" handleChange={handleChange} value={form.name} /></Suspense>
//         </div>

//         <div>
          
//         <Suspense fallback={<LoginLoader/>}><LazyInput placeholder="Insert user password" type="password" name="password" handleChange={handleChange} value={form.password} /></Suspense>
//         </div>

//         {form.name === "" || form.password === "" ? (
//           <Button isDisabled={true} handleClick={handleClick}>
//             Log In
//           </Button>
//         ) : (
//           <Button isDisabled={false} handleClick={handleClick}>
//             Log In
//           </Button>
//         )}
//       </LoginContainer>
//     </>
//   );
// };


export const LogingPage = () => {
 // const {name, setName }= useState<UserProps>()
  const {loginWithRedirect} = useAuth0();


useEffect(() => {
  getAllUsers()
  getUserByID("64d4acfed37345fc51a3cef6")


  
}, [])

 


  return (
    <LoginPageStyles>
      <div className='loginpage__divInputs'>
        <label className='loginpage__divInputs-label' htmlFor="InputUser">User Name</label>
        <input className='loginpage__divInputs-input' type="text" name="UserName" id="InputUser" />
      </div>
      <div className='loginpage__divInputs'>
        <label className='loginpage__divInputs-label' htmlFor="InputEmail">Email</label>
        <input className='loginpage__divInputs-input' type="email" name="UserEmail" id="InputEmail" />
      </div>
      <div className='loginpage__divInputs'>
        <label className='loginpage__divInputs-label' htmlFor="Inputpassword">Password</label>
        <input className='loginpage__divInputs-input' type="password" name="Userpassword" id="Inputpassword" />
      </div>
      <div className='loginpage__divInputs'>
        <label className='loginpage__divInputs-label' htmlFor="InputConfirmPassword"> Confirm password</label>
        <input className='loginpage__divInputs-input' type="password" name="UserConfirmPassword" id="InputConfirmPassword" />
      </div>
      <div className='loginpage__divButtons'>
        <button type="button" className="loginpage__divButtons-button">Log In</button>
        <p className='loginpage__divButtons-text'>Do you not have an account?, <Link to={"/signin"} className='loginpage__divButtons-text-link'>Sign In</Link></p>        
      </div>
      <div className='loginpage__divButtons'>
        <hr />
        <h5>Or use Google, Github or Facebook</h5>
        <button type="button" className="loginpage__divButtons-button" onClick={()=> loginWithRedirect()}>Log In with Google</button>

        
      </div>



    </LoginPageStyles>
  )
}
