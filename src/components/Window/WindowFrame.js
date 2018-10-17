import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles/WindowFrame.scss';

const WindowFrame = props => (
  <div
    className={classnames('window', props.className)}
    style={props.coordinates && {
      position: 'absolute',
      top: props.coordinates.posY,
      left: props.coordinates.posX,
    }}
  >
    {props.children}
  </div>
);

WindowFrame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  coordinates: PropTypes.shape({
    posX: PropTypes.number,
    posY: PropTypes.number,
  }),
};

export default WindowFrame;
