import clsx from "clsx";
import { SidebarLink } from "./sidebar-link";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type SidebarItemProps = {
    link: SidebarLink;
}

export default function SidebarItem({link}: SidebarItemProps) {

    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [currentLink, setCurrentLink] = useState(location.pathname);
    const props = link.children ? {
        'data-bs-target': `#${link.id}`,
        'data-bs-toggle': 'collapse'
    } : {};

    useEffect(() => {
        link.children?.map(item => {
            if(item.url === location.pathname) setIsActive(true);
        });
        setCurrentLink(location.pathname);
    },[location]);

    if(link.navHeading) return <li className="nav-heading">{ link.label }</li>

    return (
        <li className="nav-item">
            <Link
                className={clsx('nav-link',
                isActive || currentLink === link.url ? '' : 'collapsed')
                }
                to={link.url}
                {...props}>
                <i className={clsx('bi',link.icon)}></i>
                <span>{ link.label }</span>
                {link.children ? <i className="bi bi-chevron-down ms-auto"></i> : ''}
            </Link>
            {link?.children ? (
                    <ul id={link.id}
                        className={clsx('nav-content collapse',
                        isActive ? 'show' : '')}
                        data-bs-parent="#sidebar-nav">
                        {link.children?.map((item, index) => 
                            <li key={index}>
                                <Link to={item.url} className={clsx(
                                    currentLink === item.url ? 'active' : ''
                                )}>
                                    <i className="bi bi-circle"></i><span>{item.label}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
            ) : ''}
        </li>
    )
}