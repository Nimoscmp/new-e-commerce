import {Provider} from 'react-redux';
import Login from "./components/Login";
import generateStore from './redux/store';

function App() {

  const store = generateStore();

  return (
    <>
      <Provider
        store={store}>
        <Login />
      </Provider>
    </>
  );
}

export default App;
