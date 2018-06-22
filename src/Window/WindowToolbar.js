import React from 'react';
import './_window-toolbar.scss';

const WindowToolbar = props => (
  <div className="WindowToolbar">
    <button className="WindowToolbar__active-zone">
      { props.toolbarSections && (
          props.toolbarSections.map( section => (
            <div className="WindowToolbar__section">
              {section.name}
              <div className="WindowToolbar__section__content">
                { section.content }<br/>
                { section.content }<br/>
                { section.content }<br/>
                { section.content }<br/>
                { section.content }<br/>
              </div>
            </div>
          ))
        )
      }
    </button>
  </div>
);

export default WindowToolbar;
