import React, { useState } from "react";
import { FaChevronLeft, FaEllipsisH } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import "./ListTasks.css";

function ListTasks(props) {
  const {
    onAddTask,
    onDeleteTask,
    onEditTask,
    showListCategories,
    filteredCategory,
  } = props;
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [isDisplayInput, setIsDisplayInput] = useState(false);
  const [isShowListCategories, setIsShowListCategories] = useState(true);

  const handleAddNew = (e) => {
    if (e.key === "Enter") {
      onAddTask(e.target.value, filteredCategory.id);
      setIsDisplayInput(false);
    }
  };

  const handleChangeInputAdd = (e) => {
    setNewTaskDescription(e.target.newTaskDescription);
  };

  const handleDeleteTask = (e) => {
    onDeleteTask(e, filteredCategory.id);
  };

  const handleChangeInput = (value, taskId, id) => {
    onEditTask(value, taskId, id);
  };

  const handleToggleText = () => {
    setIsDisplayInput(!isDisplayInput);
  };

  const handleShowListCategories = () => {
    setIsShowListCategories(!isShowListCategories);
    showListCategories(isShowListCategories);
  };

  return (
    <div className="task-item">
      <div className="task-item__icon" onClick={handleShowListCategories}>
        <FaChevronLeft />
        <p>Lists</p>
      </div>
      <div className="task-item__header">
        {filteredCategory.hasOwnProperty("name") && (
          <div className="header-name">
            <h3>{filteredCategory.name}</h3>
          </div>
        )}
        <div className="header-option">
          <FaEllipsisH className="option-icon" />
        </div>
      </div>
      <div className="task-item__content">
        {filteredCategory.hasOwnProperty("listTasks") &&
          filteredCategory.listTasks.map((item, id) => (
            <div className="content-task" key={id}>
              <input
                type="text"
                value={item}
                className="task-text"
                onChange={(e) =>
                  handleChangeInput(e.target.value, filteredCategory.id, id)
                }
              />
              <MdDeleteForever
                className="icon-delete"
                onClick={(e) => handleDeleteTask(id)}
              />
            </div>
          ))}
        {isDisplayInput && (
          <div className="task-item__add">
            <br />
            <input
              type="text"
              className="task-item__text"
              required
              value={newTaskDescription}
              onChange={handleChangeInputAdd}
              onKeyPress={(e) => handleAddNew(e)}
            />
            <span className="task-item__label">Add new ...</span>
          </div>
        )}
      </div>
      <div className="task-item__addbtn" onClick={handleToggleText}>
        <BsPlusCircleFill />
        <p>New Task</p>
      </div>
    </div>
  );
}

export default ListTasks;
