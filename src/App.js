import "./App.css";
import "./grid.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoList } from "./pages";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "././reducers";
import { QueryClient, QueryClientProvider } from "react-query";
import { applyMiddleware, legacy_createStore } from "redux";

const queryClient = new QueryClient();
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<TodoList />} path="/" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
