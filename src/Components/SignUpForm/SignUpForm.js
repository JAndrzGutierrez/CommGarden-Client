import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// SignUp Form
const SignUpForm = () => {
  // LOGIC
  // Use States
  const [signupform, setSignUpForm] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState();

  // Modal States
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // API URLS/PATHS
  // const SignUpUrl = "https://localhost/8000/sign-up/";
  // const SignInUrl = "https://localhost/8000/sign-in/";

  // HandleSubmit for SignUp
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/sign-up/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: signupform.email,
        password: signupform.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("Error - Check Fetch Request"));
  };

  // HandleChange for SignUp
  const handleChange = (event) => {
    event.persist();
    setSignUpForm((prevSubmit) => {
      const editedSubmit = {
        ...prevSubmit,
        [event.target.name]: event.target.value,
      };
      console.log(editedSubmit);
      return editedSubmit;
    });
  };
  // This is the code that shows in the browser
  return (
    <Container className="sign-up-form">
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> Register Here! </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={signupform.email}
              placeholder="Email Address."
              name="email"
            />

            <input
              onChange={handleChange}
              value={signupform.password}
              placeholder="Password."
              name="password"
            />

            <Button
              variant="primary"
              onClick={(event) => {
                handleSubmit(event);
                handleClose();
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SignUpForm;
