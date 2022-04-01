import { useState, useEffect } from "react";

const SignInForm = () => {
  // LOGIC
// Use States
  const [signInform, setSignInForm] = useState({ email: "", password: "", token:"" });
  const [submit, setSubmit] = useState();
  const [info, setInfo] = useState({})
 
  // API URLS/PATHS
  // const SignUpUrl = "https://localhost/8000/sign-up/";
  // const SignInUrl = "https://localhost/8000/sign-in/";
 
  // HandleSubmit for SignUp
  const handleSubmit = (event) => {
    event.preventDefault();
   fetch('http://localhost:8000/sign-in/',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify ({
        email: signInform.email, 
        password: signInform.password
      })
   }).then(res => {
     return res.json()
   })
    // .then(data => console.log(data))
    .then(data => setInfo(data))
    .then(console.log(info))
    .catch(error => console.log('Error - Check Fetch Request'))

  }
 
  // HandleChange for SignUp
  const handleChange = (event) =>{
    event.persist();
    setSignInForm((prevSubmit) =>{
      const editedSubmit= {
        ...prevSubmit,
        [event.target.name]: event.target.value,
      };
      setInfo(editedSubmit)
      console.log(editedSubmit)
      return editedSubmit;
    })
  }


   //Sign Out Handle Function


   const handleSignOut = (event) => {
    event.preventDefault();
   fetch('http://localhost:8000/sign-out/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + info.user.token
        
      },
      method: 'DELETE',
   }).then(res => {
     return res.json()
   })
    .then(data => console.log(data))
    
    .catch(error => console.log('Error - Check Fetch Request'))
  }  
  // console.log(info.user.token)

  
  
  // This is the code that shows in the browser

return (
  <div className="sign-in-form">
    <form onSubmit={handleSubmit}>

    <input
      onChange={handleChange}
      value={ signInform.email }
      placeholder="Email Address."
      name="email"
    />

    <input
      onChange={handleChange}
      value={ signInform.password }
      placeholder="Password."
      name="password"
    />

    <button type="Submit">
          Sign-In
    </button>

</form>
<form onSubmit={handleSignOut}>
<button type="Submit">
          Sign-Out
</button>
</form>

</div>
)
}

export default SignInForm