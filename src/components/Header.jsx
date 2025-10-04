import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = ({ selectedRole, onRoleChange, userRoles }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRoleSelect = (role) => {
    onRoleChange(role);
    setIsDropdownOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="app-title">
          <div className="logo">
            <svg
              width="140"
              height="32"
              viewBox="0 0 140 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="2"
                y="22"
                fontFamily="'Arial', sans-serif"
                fontSize="16"
                fontWeight="bold"
                fill="white"
              >
                Edward Jones
              </text>
              <circle
                cx="125"
                cy="16"
                r="6"
                fill="#ff6b35"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>
          <span>Insights and Opportunities Management v1</span>
        </div>
        
        <div className="user-dropdown" ref={dropdownRef}>
          <button 
            className="dropdown-trigger"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <span>Logged In As: {selectedRole}</span>
            <ChevronDown 
              size={16} 
              style={{
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }}
            />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-content">
              {userRoles.map((role) => (
                <button
                  key={role}
                  className={`dropdown-item ${role === selectedRole ? 'active' : ''}`}
                  onClick={() => handleRoleSelect(role)}
                >
                  {role}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;