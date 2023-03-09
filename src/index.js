import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, } from 'react-router-dom';
import Routers from './Routers';
import { AuthProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);