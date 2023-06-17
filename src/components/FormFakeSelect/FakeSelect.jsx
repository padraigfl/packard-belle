import React from 'react';
import cx from 'classnames';
import './_FakeSelect.scss';

const FakeSelect = props => (
  <div className={cx('FakeSelect', { disabled: props.isDisabled })}>
    {props.icon && <img className="FakeSelect__icon" src={props.icon} />}
    <div className="FakeSelect__children">{props.title}</div>
    <div className="FakeSelect__arrow" />
  </div>
);

export default FakeSelect;
