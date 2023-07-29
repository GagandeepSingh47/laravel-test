import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Home from './Page/Home';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <Home />        
    </Provider>     
);