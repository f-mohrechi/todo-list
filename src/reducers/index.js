import {
  ADD_TODO,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  Remove_TODO,
  UPDATE,
  UPDATE_TASK,
} from "../actions";

const initialState = {
  todos: [],
  counter: 0,
  dataList: { items: [], loading: false, error: null },
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            category: action.payload.category,
            status: action.payload.status,
          },
        ],
      };

    case UPDATE:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };

    case Remove_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case UPDATE_TASK:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text,
                category: action.payload.category,
                id: action.payload.id,
                status: action.payload.status,
              }
            : todo
        ),
      };

    case "INCREMENT":
      return state.counter + 1;
    case "DECREMENT":
      return state.counter - 1;

    case FETCH_DATA:
      return {
        dataList: {
          ...state.dataList,
          loading: true,
          error: null,
        },
      };

    case FETCH_DATA_SUCCESS:
      return {
        dataList: {
          ...state.dataList,
          loading: false,
          items: action.payload,
        },
      };

    case FETCH_DATA_ERROR:
      return {
        dataList: {
          ...state.dataList,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
