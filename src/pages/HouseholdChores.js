import { React, useState } from "react";

const HouseholdChores = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    //access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const [initialList, setList] = useState([]);

  const showTaskList = () =>
    initialList.map((message, index) => {
      return <li key={index}>{message}</li>;
    });

  return (
    <div>
      <span>
        List of your <b>Household Chores</b>
      </span>
      <div>
        <span id="tasks" className="entirelist">
          <ol>{showTaskList()}</ol>
        </span>
      </div>
      <div className="textarea">
        <span>
          <textarea
            id="text"
            className="notes"
            cols="50"
            placeholder="Enter your task..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <br></br>
          <button id="add" onClick={() => setList(initialList.concat(message))}>
            Add
          </button>
        </span>
      </div>
    </div>
  );
};

export default HouseholdChores;
