import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/ExplorerView.scss';

const ExplorerView = props => (
  <div
    className={cx('ExplorerView', props.className,
      {
        'ExplorerView--fixed-width': props.fixedWidth,
        'ExplorerView--fixed-height': props.fixedHeight,
      }
    )}
    style={{
      backgroundColor: props.style.backgroundColor,
      backgroundImage: props.style.backgroundImage,
      backgroundSize: props.style.backgroundSize,
      backgroundRepeat: props.style.backgroundRepeat,
      backgroundPosition: props.style.backgroundPosition,
    }}
  >
    { props.children }
  </div>
);

ExplorerView.defaultProps = {
  style: {},
};

ExplorerView.propTypes = {
  children: PropTypes.node,
  fixedHeight: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default ExplorerView;
