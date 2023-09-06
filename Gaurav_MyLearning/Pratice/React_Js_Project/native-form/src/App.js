// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const initialValue = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // console.log(formValues);
  // let count= 0;
  function handleChange(e) {
    console.log(e.target.value);
    const { name, value } = e.target;
    console.log("name ==>", name);
    console.log("value ==>", value);

    setFormValues({ ...formValues, [name]: value });
    console.log("formValues==>", formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit==>", formValues);
    //Validate the formValues
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues);
    }
  }, [formErrors]);

  function validate(values) {
    const errors = {};
    console.log("validate ==>", values);
    const regex_email = /^\S+@\S+\.\S+$/i;
    // const regex_password= 
    //usename varification
    if (values.username === "") {
      errors.username = "Invalid username";
      console.log(errors.username);
    }
    // const check_value=(!regex_email.test(value.email));
    // console.log("return of !regex_email.test(value.email) =",check_value );
    // const check_value2=values.email;
    if(!regex_email.test(values.email))
    {
      console.log("if working for !regex_email.test(value.email)");
    }
    if(values.email)
    {
      console.log("if working for values.email")
    }

    if (values.email==="") {
      errors.email = "Enter email Id";
      console.log(errors.email);
    }
     else if (!regex_email.test(values.email)) {
      errors.email = "Invalid Email ID";
      console.log(errors.email);
    }
    // else {
    //   errors.email = "Email is required";
    // }
    // if (values.email !== regex_email) {
    //   errors.email = "Invalid Emairl ID";
    //   console.log(errors.email);
    // }

    let check = values.password.length;
    if (check === 0) {
      errors.password ="password is required";
    }
    else if (check <= 3 || check >= 9) {
      errors.password = "Password length should be between 4 and 10";
      console.log(errors.password);
    }
    // if (check === 0) {
    //   errors.password ="password is required";
    // }

    return errors;
  }

  return (
    <div className='container'>
      {
        Object.keys(formErrors).length ===0 && isSubmit ?
        (<div className='ui message success'>Signed is Successfully</div>) :
        (
        <div>
           <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
           {/* <div className='ui message unsuccess'>Signed is UnSuccessfully</div> */}
           <div className='ui message unsuccess' style={{color:"red", background:"yellow",}}>Signed is UnSuccessfully</div>
           {/* <div >Signed is UnSuccessfully</div> */}
        </div>
         
        )
      }
      <form onSubmit={handleSubmit}>
        <h1>Login form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label> Username </label>
            <input
              type="text"
              name="username"
              placeholder='Full=Gaurav Name=Pandey'
              value={formValues.username}
              onChange={handleChange}>
            </input>
          </div>
          <p>{formErrors.username}</p>

          <div className='field'>
            <label> Email </label>
            <input
              type="email"
              name="email"
              placeholder='Email ID'
              value={formValues.email}
              onChange={handleChange} >
            </input>
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label> Password </label>
            <input
              type="password"
              name="password"
              placeholder='password'
              value={formValues.password}
              onChange={handleChange}>
            </input>
          </div>
          <p>{formErrors.password}</p>
          <button className='fluid ui button green'>Submit</button>
        </div>
      </form>

    </div>


  );
}

export default App;
