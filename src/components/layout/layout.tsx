import React from 'react';
import { CocktailTypes } from '../../common/route-types';
import Sidebar from '../sidebar/sidebar';
import './index.scss';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout'>
            <Sidebar items={CocktailTypes} />
            {children}
        </div>
    );
};

export default Layout;
