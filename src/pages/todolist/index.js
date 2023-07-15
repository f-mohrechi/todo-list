import React, { useRef, useState } from "react";
import "./todolist.css";
import Modal from "../../components/general/modal";
import { TaskItem, TaskRow } from "./components/taskItem";
import { HeadRow } from "./components/headRow";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, updateToDo, removeToDo, updateTask } from "../../actions";
import { SideBar } from "./components/SideBar";

const initialState = {
  text: "",
  category: "",
  status: false,
  id: 0,
};

export const TodoList = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(initialState);

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state);

  const showTaskModal = useRef(null);
  const newTaskModal = useRef(null);
  const openEditTaskModal = () => {
    showTaskModal.current.showModal();
  };
  const openNewTaskModal = () => {
    newTaskModal.current.showModal();
  };

  const handleUpdate = (name, value) => {
    setValue((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const handleAddTodo = () => {
    if (text.trim()) {
      const id = new Date().getTime();
      dispatch(addToDo(id, text.trim(), category.trim()));
      setText("");
      setCategory("");
    }
    newTaskModal.current.hideModal();
  };

  const handleUpdateTask = () => {
    dispatch(updateTask(value));
    showTaskModal.current.hideModal();
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateToDo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeToDo(id));
  };

  const handleModalUpdate = (data) => {
    openEditTaskModal();
    setValue(data);
  };

  return (
    <>
      <div className="tasks-bg">
        <div className="p-5">
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-start-1 col-end-3">
              <SideBar data={todos} />
            </div>

            <div className="col-start-3 col-end-13">
              <div className="py-4 px-5 white-bg">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="medium-title pr-3">category:</p>
                    <div className="">
                      <p className="medium-color-title">name of category</p>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => openNewTaskModal()}
                      className="tasks-btn"
                      style={{ margin: 0 }}
                    >
                      add task
                    </button>
                  </div>
                </div>

                <div className="py-4">
                  <HeadRow />
                  {todos &&
                    todos.map((item, index) => {
                      return (
                        <TaskItem
                          handleModalUpdate={handleModalUpdate}
                          handleRemoveTodo={handleRemoveTodo}
                          handleUpdateTodo={handleUpdateTodo}
                          key={index}
                          data={item}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal ref={newTaskModal}>
        <div className="p-5 modal-bg flex flex-col items-center">
          <div className="add-box">
            <input
              placeholder="Add task"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="add-input"
            />
          </div>

          <div className="add-box mt-3">
            <input
              placeholder="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="add-input"
            />
          </div>

          <div className="flex justify-center pt-5">
            <button className="tasks-btn" onClick={handleAddTodo}>
              add
            </button>
          </div>
        </div>
      </Modal>

      <Modal ref={showTaskModal}>
        <div className="p-5 modal-bg flex flex-col items-center">
          <div className="add-box">
            <input
              placeholder="Add task"
              type="text"
              value={value.text}
              onChange={(e) => handleUpdate("text", e.target.value)}
              className="add-input"
            />
          </div>

          <div className="add-box mt-3">
            <input
              placeholder="category"
              type="text"
              value={value.category}
              onChange={(e) => handleUpdate("category", e.target.value)}
              className="add-input"
            />
          </div>

          <div className="flex justify-center pt-5">
            <button className="tasks-btn" onClick={handleUpdateTask}>
              update
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
