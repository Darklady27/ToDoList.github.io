import { React, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const HouseholdChores = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    //access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const handleTrash = (index) => {
    const newList = initialList.filter((_, i) => i !== index);
    setList(newList);
    console.log(newList);
  };

  // co to jest to przy draggableID??

  const [initialList, setList] = useState([]);

  function handleOnDragEnd(result) {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(initialList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
  }

  const showTaskList = () =>
    initialList.map((message, index) => {
      console.log(message, index);
      return (
        <Draggable draggableId={`draggable-${index}`} index={index}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {message}
              <button
                className="trash_delete"
                onClick={() => handleTrash(index)}
              >
                <FaTrash />
              </button>
            </li>
          )}
        </Draggable>
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
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ol
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="pattern">
                    <p className="title">List of your Household Chores</p>
                    {/* /*ze moze dopiero tutaj zrobic ol a nie wczesniejj i wtedy tego darppable tez tu/* */}
                    <div className="content">
                      {showTaskList()}
                      {provided.placeholder}
                    </div>
                  </div>
                </ol>
              )}
            </Droppable>
          </DragDropContext>

          {/* ze strona mi nie ma tla dalej, bo ta aktka zajmuje duzo */}
        </div>
      </div>
    </div>
  );
};

export default HouseholdChores;
