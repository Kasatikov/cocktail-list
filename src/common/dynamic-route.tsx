import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from './error-boundary';
import Layout from '../components/layout';

export interface AppRouteDto {
    path: string;
    component: React.FC;
}

const DynamicRoute = (props: AppRouteDto) => {
    const { path, component: Component } = props;
    const key = `route-${path}`;

    return (
        <Route
            key={key}
            path={path}
            element={
                <Layout>
                    <ErrorBoundary key={key}>
                        <Component />
                    </ErrorBoundary>
                </Layout>
            }
        />
    );
};

export default DynamicRoute;
