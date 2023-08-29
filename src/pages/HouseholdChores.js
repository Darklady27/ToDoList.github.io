import { React, useState } from "react";
import { FaTrash } from "react-icons/fa";

const HouseholdChores = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    //access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const [initialList, setList] = useState([]);

  const handleTrash = (index) => {
    const newList = initialList.filter((_, i) => i !== index);
    setList(newList);
    console.log(newList);
  };

  const showTaskList = () =>
    initialList.map((message, index) => {
      return (
        <li key={index}>
          {message}
          <button className="trash_delete" onClick={() => handleTrash(index)}>
            <FaTrash />
          </button>
        </li>
      );
    });

  return (
    <div>
      <div className="items">
        <div className="textfield">
          <textarea
            id="text"
            className="notes"
            cols="50"
            placeholder="Enter your task..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <div>
          <button
            className="add"
            onClick={() => setList(initialList.concat(message))}
          >
            Add
          </button>
        </div>
        <div id="tasks" className="entirelist">
          <ol>
            <div className="pattern">
              <p className="title">List of your Household Chores</p>
              <div className="content">{showTaskList()}</div>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HouseholdChores;
