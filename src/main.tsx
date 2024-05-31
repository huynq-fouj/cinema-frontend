import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './shared/toolkits/store.ts';
import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>,
)
