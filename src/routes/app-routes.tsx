import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from '../pages/page-not-found/page-not-found';
import { COCKTAIL_TYPES_ROUTE_ITEMS } from './cocktail-types-routes';
import { COCKTAIL_TYPES_ROUTE_OVERVIEW_MAP } from '../_domain/entity/cocktail/cocktail-types-route-overview';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={COCKTAIL_TYPES_ROUTE_OVERVIEW_MAP[0].path} />} />
            {COCKTAIL_TYPES_ROUTE_ITEMS}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRoutes;
