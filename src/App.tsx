import './reset.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './components/Router.tsx';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
