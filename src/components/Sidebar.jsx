import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ navigationItems }) => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav>
        <ul className="nav-menu">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.id} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <Icon className="nav-icon" size={20} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;