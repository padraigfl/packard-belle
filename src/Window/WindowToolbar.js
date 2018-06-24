import React from 'react';
import './_window-toolbar.scss';
import ListMenu from '../ListMenu/ListMenu';

const WindowToolbar = props => (
  <div className="WindowToolbar">
    { props.toolbarSections && (
        props.toolbarSections.map( section => (
          <div className="WindowToolbar__section" key={`WindowToolbar-section-${section.title}`}>
            <button>
              { section.title }
            </button>
            { section.options && <ListMenu className="WindowToolbar__dropdown" options={section.options} /> }
          </div>
        ))
      )
    }
  </div>
);

export default WindowToolbar;
