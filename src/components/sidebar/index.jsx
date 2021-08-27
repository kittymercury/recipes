import React from 'react';

import './styles.scss';

export default class Sidebar extends React.Component {
  render() {
    const { isMenuActive, onCloseSidebar } = this.props;

    return (
      <div className={`sidebar-wrapper ${isMenuActive ? 'active' : ''}`}>
        <div className="overlay" onClick={onCloseSidebar}></div>
        <div className="sidebar">
          <div className="menu-icon">
            <i className="fas fa-bars" onClick={onCloseSidebar}></i>
            <span>Menu</span>
          </div>
          <div className="submenu">
            <div className="submenu-item">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </div>
            <div className="submenu-item">
              <i className="fas fa-pen"></i>
              <span>Edit</span>
            </div>
            <div className="submenu-item">
              <i className="far fa-eye"></i>
              <span>Page view</span>
            </div>
          </div>
        </div>
        </div>
    )
  }
};
