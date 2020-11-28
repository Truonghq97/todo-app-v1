import React, { useState, useEffect } from "react";
import ListCategories from "./ListCategories";
import ListTasks from "./ListTasks";
import Header from "../Header";

function Reminder() {
  const [data, setData] = useState([
    { id: 1, name: "Lời nhắc", listTasks: ["Lời nhắc 1", "Lời nhắc 2"] },
    { id: 2, name: "Planning", listTasks: ["Planning 1", "Planning 2"] },
    { id: 3, name: "Việc nhà", listTasks: ["Việc nhà 1", "Việc nhà 2"] },
  ]);
  const [filteredCategory, setFilteredCategory] = useState({});
  const [isShowListCategories, setIsShowListCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      let filteredCategory = JSON.parse(localStorage.getItem("data"));
      setData(filteredCategory);
    }
  }, []);

  const showListTasksByCategory = (index) => {
    let task = data[index];
    setFilteredCategory(task);
    setSelectedCategory(index + 1);
    localStorage.setItem("data", JSON.stringify(data));
  };

  const handleAddTask = (value, id) => {
    let elementIndex = data.findIndex((element) => element.id === id);
    let newData = [...data];
    newData[elementIndex] = {
      ...newData[elementIndex],
      listTasks: [...newData[elementIndex].listTasks, value],
    };
    setData(newData);
    setFilteredCategory(newData[elementIndex]);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const handleDeleteTask = (value, id) => {
    let elementIndex = data.findIndex((element) => element.id === id);
    let newData = [...data];
    newData[elementIndex] = {
      ...newData[elementIndex],
      listTasks: newData[elementIndex].listTasks.filter(
        (item, index) => index !== value
      ),
    };
    setData(newData);
    setFilteredCategory(newData[elementIndex]);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const handleEditTask = (value, taskId, id) => {
    let elementIndex = data.findIndex((element) => element.id === taskId);
    let newData = [...data];
    let newListTasks = [...data[elementIndex].listTasks];
    newListTasks[id] = value;
    newData[elementIndex] = {
      ...newData[elementIndex],
      listTasks: [...newListTasks],
    };
    setData(newData);
    setFilteredCategory(newData[elementIndex]);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const handleShowListCategories = (e) => {
    setIsShowListCategories(e);
  };

  const handleAddCategory = (value) => {
    let newData = [...data];
    let newCategory = { id: data.length + 1, name: value, listTasks: [] };
    setData(newData.concat(newCategory));
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <div className="reminder">
      <Header showListCategories={handleShowListCategories} />
      <div className="todo-list">
        <ListCategories
          data={data}
          selectedCategory={selectedCategory}
          showListTasksByCategory={showListTasksByCategory}
          showListCategories={isShowListCategories}
          onAddCategory={handleAddCategory}
        />
        <ListTasks
          filteredCategory={filteredCategory}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
          showListCategories={handleShowListCategories}
        />
      </div>
    </div>
  );
}

export default Reminder;
