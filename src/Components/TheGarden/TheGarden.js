import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TheGarden = ({ info, setInfo }) => {
  const [gardenTask, setGardenTask] = useState({
    task: "",
    status: "",
    user: "",
  });

  // console.log("Sign Form Before handle submit",info)

  const handleSubmit = (event) => {
    console.log(info);
    // lets log info to see if it has the token
    //  console.log('info.user.token is ', info.user.token)

    event.preventDefault();
    fetch("http://localhost:8000/garden_tasks/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + info.user.token,
      },
      method: "POST",
      body: JSON.stringify({
        task: gardenTask.task,
        status: gardenTask.status,
        user: gardenTask.user,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('This is the POST Garden Data', data)
        console.log('Token', info.user.token)
      })
      .catch((error) => console.log(" Error! You can Forking Fix it!!!"));
  };

  const handleChange = (event) => {
    event.persist();
    setGardenTask((prevSubmit) => {
      const editedSubmit = {
        ...prevSubmit,
        [event.target.name]: event.target.value,
      };
      // console.log("This is the editedSubmit", editedSubmit);
      return editedSubmit;
    });
  };

  return (
    
        <Form onSubmit={handleSubmit}>
          <Form.Label>Garden Tasks</Form.Label>
          {/* the onChange needs to be only in the input  */}
          <Form.Group>
          <Form.Control
            type="input"
            onChange={handleChange}
            value={gardenTask.task}
            placeholder="Enter Your Task."
            name="task"
          />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="input"
              onChange={handleChange}
              value={gardenTask.user}
              placeholder="Enter User."
              name="user"
            />
          </Form.Group>
            <input
              type="text"
              onChange={handleChange}
              value={gardenTask.status}
              placeholder="Enter Status."
              name="status"/>
            <Form.Group>
            {/* <Form.Select aria-label="Default select example">
              <option>None</option>
              <option value={gardenTask.status} name="status">
                Pending
              </option>
              <option value={gardenTask.status} name="status">
                Completed
              </option>
              <option value={gardenTask.status} name="status">
                Cancelled
              </option>
            </Form.Select> */}
          
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      

      
   
  );
};

export default TheGarden;
