import {useState} from "react"
import Container  from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"

const SignInForm = () => {
        // React States
        const [errorMessages, setErrorMessages] = useState({});
        const [isSubmitted, setIsSubmitted] = useState(false);
      
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
      
        const handleSubmit = (event) => {
          //Prevent page reload
          event.preventDefault();
      
          var { uname, pass } = document.forms[0];
      
          // Find user login info
          const userData = database.find((user) => user.username === uname.value);
      
          // Compare user info
          if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
              setErrorMessages({ name: "pass", message: errors.pass });
            } else {
              setIsSubmitted(true);
            }
          } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
          }
        };
      
        // Generate JSX code for error message
        const renderErrorMessage = (name) =>
          name === errorMessages.name && (
            <Container className="error">{errorMessages.message}</Container>
          );
      
        // JSX code for login form
        const renderForm = (
          <Container className="form">
            <Form onSubmit={handleSubmit}>
              <Container className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </Container>
              <Container className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </Container>
              <Container className="button-container">
                <input type="submit" />
              </Container>
            </Form>
          </Container>
        );
      
        return (
            <div className="login-form">
              <div className="title">Sign In</div>
              {isSubmitted ? <div>Successfully logged as {database[0].username} </div> : renderForm}
            </div>
        );
      }

export default SignInForm