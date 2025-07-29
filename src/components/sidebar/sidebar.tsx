import React, { memo } from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    items: Record<string, unknown>;
}

const Sidebar: React.FC<SidebarProps> = memo(({ items }) => {
    const { pathname } = useLocation();

    const pathnameWithoutSlash = pathname.substring(1);

    const elements = Object.keys(items).map((elemKey) => {
        const elemValue = items[elemKey];
        const isActive = pathnameWithoutSlash === elemValue;
        const constructedClassname = `item ${isActive ? 'active' : ''}`;

        return (
            <div className={constructedClassname} key={elemKey}>
                <Link to={`/${elemValue}`}>{elemValue}</Link>
            </div>
        );
    });

    return <div className='sidebar'>{elements}</div>;
});

export default Sidebar;
