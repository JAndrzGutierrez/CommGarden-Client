import { useState, useEffect } from "react";


// SignUp Form 
const SignUpForm = () => {
  // LOGIC
// Use States
  const [signupform, setSignUpForm] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState();
  

  // API URLS/PATHS
  // const SignUpUrl = "https://localhost/8000/sign-up/";
  // const SignInUrl = "https://localhost/8000/sign-in/";
  

  // HandleSubmit for SignUp
  const handleSubmit = (event) => {
    event.preventDefault();
   fetch('http://localhost:8000/sign-up/',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify ({
        email: signupform.email, 
        password: signupform.password
      })
   }).then(res => {
     return res.json()
   })
    .then(data => console.log(data))
    .catch(error => console.log('Error - Check Fetch Request'))
  }
 
  // HandleChange for SignUp
  const handleChange = (event) =>{
    event.persist();
    setSignUpForm((prevSubmit) =>{
      const editedSubmit= {
        ...prevSubmit,
        [event.target.name]: event.target.value,
      };
      console.log(editedSubmit)
      return editedSubmit;
    })
  }
  // This is the code that shows in the browser
  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>

      <input
        onChange={handleChange}
        value={ signupform.email }
        placeholder="Your email goes here."
        name="email"
      />

      <input
        onChange={handleChange}
        value={ signupform.password }
        placeholder="Your password goes here."
        name="password"
      />

      <button type="Submit">
            Sign-up
      </button>

</form>
    </div>
  );

};

export default SignUpForm;
