import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TheGarden = ({info, setInfo}) => {
  const [gardenTask, setGardenTask] = useState({
    task: "",
    status: "",
    user: "",
  });
  
// console.log("Sign Form Before handle submit",info)

  const handleSubmit = (event) => {
      console.log(info)
     // lets log info to see if it has the token
    //  console.log('info.user.token is ', info.user.token)

    event.preventDefault();
    fetch('http://localhost:8000/garden_tasks/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + info.user.token,
      },
      method: 'POST',
      body: JSON.stringify ({
        task: gardenTask.task,
        status: gardenTask.status,
        user: gardenTask.user,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(data => {
        // console.log('This is the POST Garden Data', data)
        // console.log('Token', info.user.token)
       
       
  })
      .catch((error) =>
        console.log(" Error! You can Forking Fix it!!!")
      );
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
    <Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            {/* the onChange needs to be only in the input  */}
            <input
              onChange={handleChange}
              value={gardenTask.task}
              placeholder="Enter Your Task."
              name="task"
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              onChange={handleChange}
              value={gardenTask.user}
              placeholder="Enter User."
              name="user"
            />
            
            <input
              type="text"
              onChange={handleChange}
              value={gardenTask.status}
              placeholder="Enter Status."
              name="status"/>
           
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>

      <h1>Thank you for you willingness to Help</h1>
      <iframe
        width="686"
        height="386"
        src="https://www.youtube.com/embed/9iwEASoxi70"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default TheGarden;
