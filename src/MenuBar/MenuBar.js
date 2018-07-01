
import React from 'react';
import './_menu-bar.scss';
import ListMenu from '../ListMenu/ListMenu';

const MenuBar = props => (
  <div className="MenuBar">
    { props.toolbarSections && (
        props.toolbarSections.map( section => (
          <div className="MenuBar__section" key={`MenuBar-section-${section.title}`}>
            <button>
              <div data-before={`${section.title}`} />
            </button>
            { section.options && <ListMenu className="MenuBar__dropdown" options={section.options} /> }
          </div>
        ))
      )
    }
  </div>
);

export default MenuBar;
