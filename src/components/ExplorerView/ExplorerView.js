import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ExplorerIcon from '../Icon/ExplorerIcon';
import './styles/ExplorerView.scss';

const ExplorerView = props => (
  <div className={cx('ExplorerView', props.className,
    {
      'ExplorerView--fixed-width': props.fixedWidth,
      'ExplorerView--fixed-height': props.fixedHeight,
    }
  )}>
    { props.options && props.options.map(option => (
      <ExplorerIcon
        key={option.title}
        {...option}
      />
    ))}
  </div>
);

ExplorerView.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(ExplorerIcon.propTypes)),
  fixedHeight: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default ExplorerView;
