export const ADD_TODO = "ADD_TODO";
export const UPDATE = "UPDATE_TODO";
export const Remove_TODO = "Remove_TODO";
export const UPDATE_TASK = "UPDATE_TASK";
export const FETCH_DATA = "  FETCH_DATA";
export const FETCH_DATA_ERROR = "  FETCH_DATA_ERROR";
export const FETCH_DATA_SUCCESS = "  FETCH_DATA_SUCCESS";

const addToDo = (id, text, category) => ({
  type: ADD_TODO,
  payload: {
    id,
    text,
    category,
    status: false,
  },
});

const updateToDo = (id) => ({
  type: UPDATE,
  payload: id,
});

const removeToDo = (id) => ({
  type: Remove_TODO,
  payload: id,
});

const updateTask = (data) => ({
  type: UPDATE_TASK,
  payload: data,
});

const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});
const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
const fetchDataError = (data) => ({
  type: FETCH_DATA_ERROR,
  payload: data,
});

export {
  addToDo,
  updateToDo,
  removeToDo,
  updateTask,
  fetchData,
  fetchDataSuccess,
  fetchDataError,
};
