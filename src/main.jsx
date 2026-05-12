import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Providers from './app/Providers';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Providers>
        <App />
    </Providers>
);
