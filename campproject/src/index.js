import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { configureStore } from './Store/configureStore';
import "react-toastify/dist/ReactToastify.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore() // configureStore'u çağırıp storea at 
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// Performansı ölçmek isterseniz, sonuçları konsola yazdırmak için bir fonksiyon geçebilirsiniz
// veya analitik bir servise gönderebilirsiniz. Daha fazla bilgi için belirtilen bağlantıyı ziyaret edebilirsiniz.
reportWebVitals();
