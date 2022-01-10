import MyRoute from "./MyRoute";
import store from "./store";
import { Provider } from "react-redux";


const App = () => {
  return (
    <>
      <Provider store={store}>
        <MyRoute />
      </Provider>

    </>
  );
}

export default App;
