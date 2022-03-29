import {useState} from "react"


const SignInForm = () => {
    
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [IsSubmitted, setIsSubmitted] = useState(false);
    
    // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

}
export default SignUp