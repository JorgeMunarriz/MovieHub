import { useEffect, useState } from 'react';
import { getAllUsers, getUserByID, UserProps } from '../../../api/fetchUrlUser';
import { LoginPageStyles } from '..';
import { Link } from 'react-router-dom';

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


export const SignInPage = () => {
  const {name, setName }= useState<UserProps>()
  

useEffect(() => {
  getAllUsers()
  getUserByID("64d17564b3057c1c237fd175")


  
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
        <button type="button" className="loginpage__divButtons">Button</button>
        <p>Do you have an account?, <Link to={"/login"}>Log In</Link></p>
        
      </div>


    </LoginPageStyles>
  )
}
