import React, { useRef } from "react";
import Modal from "../../../../components/general/modal";

export const EditTaskModal = (props) => {
  const EditTaskModal = useRef(null);

  const openEditTaskModal = () => {
    EditTaskModal.current.showModal();
  };

  return (
    <Modal ref={EditTaskModal}>
      <div className="p-5 modal-bg d-flex flex-column align-items-center">
        <div className="add-box">
          <input
            placeholder="Add task"
            type="text"
            value={props.textValue}
            onChange={(e) => props.handleUpdate("text", e.target.value)}
            className="add-input"
          />
        </div>

        <div className="add-box mt-3">
          <input
            placeholder="category"
            type="text"
            value={props.catValue}
            onChange={(e) => props.handleUpdate("category", e.target.value)}
            className="add-input"
          />
        </div>

        <div className="d-flex justify-content-center pt-5">
          <button className="tasks-btn" onClick={props.handleUpdateTask}>
            update
          </button>
        </div>
      </div>
    </Modal>
  );
};
