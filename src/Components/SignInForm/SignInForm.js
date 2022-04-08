import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TheGarden from "../TheGarden/TheGarden";

const SignInForm = () => {
  // LOGIC
  // Use States
  const [signInform, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [info, setInfo] = useState({});
  //Modal States
  // API URLS/PATHS
  // const SignUpUrl = "https://localhost/8000/sign-up/";
  // const SignInUrl = "https://localhost/8000/sign-in/";

  // HandleSubmit for SignUp
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/sign-in/", {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Token " + info.user.token,
      },
      method: "POST",
      body: JSON.stringify({
        email: signInform.email,
        password: signInform.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log("sign in data is ", data); // print sign in data
        console.log('Sign Up Log:',data)
        setInfo(data);
      })
      .catch((error) => console.log("Error - HandleSubmit", error)); // when troubleshooting print the error object so you get more info
  };

  // HandleChange for SignUp
  const handleChange = (event) => {
    event.persist();
    setSignInForm((prevSubmit) => {
      const editedSubmit = {
        ...prevSubmit,
        [event.target.name]: event.target.value,
      };
      setInfo(editedSubmit);
      // console.log("This is the editedSubmit", editedSubmit);
      console.log('Set Info Log:', editedSubmit)
      return editedSubmit;
    });
  };

  //Sign Out Handle Function

  const handleSignOut = (event) => {
    event.preventDefault();
    console.log("Users", info.user.token);
    fetch("http://localhost:8000/sign-out/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + info.user.token,
      },
      method: "DELETE",
    })
      .then(() => console.log("Console log from Sign Out", info.user.token))
      .catch((error) => console.log("Error Sign Out Request", error));
  };

  // This is the code that shows in the browser

  return (
    // <Container>
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter email"
    //         onChange={handleChange}
    //         value={signInform.email}
    //         name="email"
    //       />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control 
    //       type="password" 
    //       placeholder="Password"
    //       onChange={handleChange}
    //       value={signInform.password}
    //       name="password"
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
    //   <TheGarden
    //      info={info}
    //      setInfo={setInfo}
    //    />
    // </Container>

    <Container className="sign-in-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <input
            onChange={handleChange}
            value={signInform.email}
            placeholder="Email Address."
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <input
            onChange={handleChange}
            value={signInform.password}
            placeholder="Password."
            name="password"
          />
        </Form.Group>

        <Button type="Submit">Sign-In</Button>
      </Form>
      <Form onSubmit={handleSignOut}>
        <Button className="sign-out-button" variant="secondary" type="Submit">
          Sign-Out
        </Button>
      </Form>
      <TheGarden
        info={info}
        setInfo={setInfo}
      />
    </Container>
  );
};

export default SignInForm;
