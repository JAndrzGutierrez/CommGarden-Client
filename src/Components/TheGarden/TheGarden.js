import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TheGarden = ({}) => {
  const [GardenTask, setGardenTask] = useState({
    task: "",
    status: "",
    user: "",
  });
  const [Info, setInfo] = useState({});

  const handleSubmit = (event) => {
    event.prevent();
    fetch("http://localhost:8000/garden_tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: GardenTask.task,
        status: GardenTask.status,
        user: GardenTask.user,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log("This the data from my DB", data))
      .catch((error) =>
        console.log("Forking Error! You can Forking Fix it!!!")
      );
  };

  const handleChange = (event) => {
    event.persist();
    setGardenTask((prevSubmit) => {
      const editedSubmit = {
        ...prevSubmit,
        [event.target.name]: event.target.value,
      };
      setInfo(editedSubmit);
      console.log("This is the editedSubmit", editedSubmit);
      return editedSubmit;
    });
  };

  return (
    <Container>
      <Container>
        <Form onChange={handleChange}>
          <Form.Group>
            <input
              onChange={setGardenTask}
              value={GardenTask.task}
              placeholder="Enter Your Task."
              name="GardenTask"
            />
          </Form.Group>
          <Form.Select>
            <input
              onChange={setGardenTask}
              value={GardenTask.task}
              placeholder="Enter Your Task."
              name="GardenTask"
            />
            <option>Select Status</option>
            <option onChange={setGardenTask} value={GardenTask.task}>
              Pending
            </option>
            <option onChange={setGardenTask} value={GardenTask.task}>
              Completed
            </option>
            <option onChange={setGardenTask} value={GardenTask.task}>
              Cancelled
            </option>
          </Form.Select>
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <h1>This is THEGARDEN PAGE</h1>
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
