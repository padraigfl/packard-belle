import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './_Frame.scss';

const WindowFrame = (props) => {
  const attributes = Object.keys(props).reduce((attrs, propKey) => {
    if (propKey.match(/^[a-z]+([a-z-][a-z])*$/)) {
      return { ...attrs, [propKey]: props[propKey] };
    }
  }, {});
  return (
    <div {...attributes} className={cx('Frame', props.className)} ref={props.innerRef}>
      {props.children}
    </div>
  );
};

WindowFrame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default WindowFrame;
