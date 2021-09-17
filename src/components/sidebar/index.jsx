import React from 'react';

import './styles.scss';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownMenu: 'appearance'
    }
  }

  handleClickDropdown = (id) => {
    this.setState({ dropdownMenu: (id === this.state.dropdownMenu) ? null : id });
  }

  renderCheck = (state, prop) => {
    if (state === prop) {
      return <i className="fas fa-check"></i>
    }
  }

  render() {
    const {
      view,
      order,
      fontSize,
      isSidebarActive,
      onCloseSidebar,
      onOpenPopUp,
      onClickRemove,
      onClickRename,
      onClickChangeView
    } = this.props;
    const { dropdownMenu } = this.state;

    return (
      <div className={`sidebar-wrapper ${isSidebarActive ? 'active' : ''}`}>
        <div className="overlay" onClick={onCloseSidebar}></div>
        <div className="sidebar">

          <div className="menu-icon">
            <i className="fas fa-bars" onClick={onCloseSidebar}></i>
            <span>Menu</span>
          </div>

          <div className="menu">

            <div className="menu-item" onClick={onOpenPopUp}>
              <div className="name">
                <i className="fas fa-plus"></i>
                <span>New recipe</span>
              </div>
            </div>


            <div className={`menu-item ${dropdownMenu === 'edit-items' ? 'active-item' : ''}`}>

              <div className="name" onClick={() => this.handleClickDropdown('edit-items')}>
                <i className="fas fa-pen"></i>
                <span>Edit items</span>
                <i className="fas fa-angle-right"></i>
              </div>

              <div className="submenu">
                <div className="submenu-item" onClick={onClickRemove}>Remove</div>
                <div className="submenu-item" onClick={onClickRename}>Rename</div>
              </div>

            </div>


            <div className={`menu-item ${dropdownMenu === 'appearance' ? 'active-item' : ''}`}>

              <div className="name" onClick={() => this.handleClickDropdown('appearance')}>
                <i className="far fa-eye"></i>
                <span>Appearance</span>
                <i className="fas fa-angle-right"></i>
              </div>


                 {/* WORK HERE */}

              <div className="submenu">
                <div className="submenu-item with-dropdown">
                  <span>View</span>
                  <i className="fas fa-angle-down"></i>
                </div>

                <div className={`submenu-item dropdown ${view === 'list' ? 'active-view' : ''}`} onClick={() => onClickChangeView('list')}>
                  <i className="fas fa-list"></i>
                  <span>List</span>
                  {this.renderCheck(view, 'list')}
                </div>

                <div className={`submenu-item dropdown ${view === 'gallery' ? 'active-view' : ''}`} onClick={() => onClickChangeView('gallery')}>
                  <i className="fas fa-th-large"></i>
                  <span>Gallery</span>
                  {this.renderCheck(view, 'gallery')}
                </div>


                {/* ------------------------------- */}

                <div className="submenu-item with-dropdown">
                  <span>Sort</span>
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="submenu-item dropdown">Newest to oldest</div>
                <div className="submenu-item dropdown">Oldest to newest</div>

                <div className="submenu-item with-dropdown">
                  <span>Font size</span>
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="submenu-item dropdown">Small</div>
                <div className="submenu-item dropdown">Medium</div>
                <div className="submenu-item dropdown">Large</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
