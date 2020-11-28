import React, { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import "./ListCategories.css";

function ListCategories(props) {
  const {
    data,
    showListTasksByCategory,
    showListCategories,
    onAddCategory,
    selectedCategory,
  } = props;
  const [isDisplayInput, setIsDisplayInput] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleClickCategory = (e) => {
    showListTasksByCategory(e);
  };

  const handleToggleText = () => {
    setIsDisplayInput(!isDisplayInput);
  };

  const handleChangeInputAdd = (e) => {
    setNewCategory(e.target.newCategory);
  };

  const handleAddNew = (e) => {
    if (e.key === "Enter") {
      onAddCategory(e.target.value);
      setIsDisplayInput(false);
    }
  };

  return (
    <div className={showListCategories ? "task-list click" : "task-list"}>
      <div className="task-list__content">
        {data.map((task, index) => {
          if (task.id === selectedCategory) {
            return (
              <div
                key={index}
                className="task-list__name active"
                onClick={(e) => handleClickCategory(index)}
              >
                <h4>
                  <span className="task-list__icon">
                    <AiOutlineUnorderedList className="option__icon" />
                  </span>
                  {task.name}
                </h4>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="task-list__name"
                onClick={(e) => handleClickCategory(index)}
              >
                <h4>
                  <span className="task-list__icon">
                    <AiOutlineUnorderedList className="option__icon" />
                  </span>
                  {task.name}
                </h4>
              </div>
            );
          }
        })}
        {isDisplayInput && (
          <div className="task-list__add">
            <br />
            <input
              type="text"
              className="task-list__text"
              required
              value={newCategory}
              onChange={handleChangeInputAdd}
              onKeyPress={(e) => handleAddNew(e)}
            />
            <span className="task-list__label">Add new ...</span>
          </div>
        )}
      </div>
      <div className="task-list__add" onClick={handleToggleText}>
        <BsPlusCircleFill />
        <p>New Category</p>
      </div>
    </div>
  );
}

export default ListCategories;
