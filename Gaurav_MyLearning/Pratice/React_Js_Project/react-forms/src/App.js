import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
    console.log(userInfo);
  };
  console.log(errors);

  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              // name="username"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            
            {errors.username && <p> This field is required</p>}
          </div>
          {/* <p>{errors.username?.message}</p> */}
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              // name="email"
              placeholder="Email"
              {...register("email",
                {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: "This is not a valid email",
                  }
                })}
            />
          </div>
          {/* <p>{errors.email?.message}</p> */}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              // name="password"
              {...register("passowrd",
                {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be more than 4 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password cannot exceed more than 10 characters",
                  }
                }
              )
              }
              placeholder="Password"
            />
          </div>
          {/* <p>{errors.password?.message}</p> */}
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;