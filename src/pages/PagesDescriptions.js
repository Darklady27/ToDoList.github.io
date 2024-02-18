import { React, useState, useEffect, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { jsPDF } from "jspdf";
import { Col, Row, Button, Space, Input } from "antd";
import { BiDownload } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import isDarkModeContext from "./Context";

const { TextArea } = Input;

const PagesDescriptions = (props) => {
  const isDarkMode = useContext(isDarkModeContext);

  const createPDF = async () => {
    const pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });

    const data = await document.querySelector("#pdf");

    pdf
      .html(data, {
        html2canvas: { scale: 0.65 },
      })
      .then(() => {
        pdf.save("lists.pdf");
      });
  };

  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTrash = (index) => {
    const newList = initialList.filter((_, i) => i !== index);
    setList(newList);
  };

  const [initialList, setList] = useState(
    JSON.parse(localStorage.getItem(props.id)) || []
  );

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(initialList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
  }

  useEffect(() => {
    const storedCount = localStorage.getItem(props.name);

    if (storedCount) {
      setList(JSON.parse(storedCount));
    }
  }, [props.name]);

  useEffect(() => {
    localStorage.setItem(props.name, JSON.stringify(initialList));
  }, [initialList, props.name]);

  const showTaskList = () =>
    initialList.map((message, index) => {
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
                className="trash-delete"
                onClick={() => handleTrash(index)}
              >
                <FaTrash style={{ color: isDarkMode ? "white" : "black" }} />
              </button>
            </li>
          )}
        </Draggable>
      );
    });

  return (
    <>
      <Row>
        <Col span={8}>
          <>
            <TextArea
              className="notes"
              rows={4}
              placeholder="Enter your task..."
              value={message}
              onChange={handleMessageChange}
            />
          </>
          <Space className="buttons">
            <Button onClick={() => setList(initialList.concat(message))}>
              <AiOutlinePlus />
            </Button>
            <Button onClick={createPDF}>
              <BiDownload />
            </Button>
          </Space>
        </Col>
        <Col span={16} className="tasks">
          <div id="pdf" className="tasks">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ol
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    key="list"
                  >
                    <div
                      className={isDarkMode ? "pattern-dark" : "pattern-light"}
                    >
                      <p className="title">List of {props.name}</p>

                      <div className="content">
                        {showTaskList()}
                        {provided.placeholder}
                      </div>
                    </div>
                  </ol>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PagesDescriptions;
