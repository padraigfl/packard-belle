
import React from 'react';
import Button from '../Button/AbstractButton';
import ContextMenu from '../ContextMenu/ContextMenu';
import '../../_scss/w98/window.scss';

const MenuBar = props => (
  <div className="window__menu menu-bar">
    { props.options && (
        props.options.map( section => (
          <div className="window__menu__section menu-bar__section" key={`menu-bar-section-${section.title}`}>
            <Button>{section.title}</Button>
            { section.options && <ContextMenu className="menu-bar__section__dropdown" options={section.options} /> }
          </div>
        ))
      )
    }
  </div>
);

export default MenuBar;
