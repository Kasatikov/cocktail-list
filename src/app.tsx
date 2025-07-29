import React from 'react';
import './index.scss';
import AppRoutes from './routes/app-routes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};
