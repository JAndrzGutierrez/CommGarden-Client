import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

// SignUp Form

const SignUpForm = () => {
  // useState
const [show, setShow] = useState(false);
const [formData, setformData] = useState({email : "", password : ""})

  // handle variables
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const apiUrl = "http://localhost:8000";
  const baseUrl =
    process.env.NODE_ENV === "production" ? null : "http://localhost:8000";
  const api = axios.create({
    baseURL: baseUrl,
  });

  const handleSubmit = async (data) => {
    // event.preventDefault();
    const resp = await axios.post(apiUrl + "sign-up", { user: data });
    localStorage.setItem("authToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;

    // setToggle(!toggle);
  };

  
  // to do list
  // Handle change
  // Handle 
  // Add value and onchange 

  return (
    <div className="sign-up-form">
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={
            () => {handleSubmit(formData)}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUpForm;
