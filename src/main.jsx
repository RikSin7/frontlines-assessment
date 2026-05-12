import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Providers from './app/Providers';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers store={store}>
    <App />
  </Providers>
);
