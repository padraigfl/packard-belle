import React from 'react';
import cx from 'classnames';
import WindowAbstract from '../Window';
import FakeSelect from '../FormFakeSelect';
import IconListIcon from '../IconListIcon';
import ButtonIconSmall from '../ButtonIconSmall';
import InputText from '../FormInputText';
import ButtonForm from '../ButtonForm';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';

import './_styles.scss';
import SelectBox from '../FormSelectBox';

const noop = () => {};

const WindowAction = props => (
  <WindowAbstract
    className={cx('WindowAction', props.className)}
    title={props.action}
    onClose={props.onCancel}
    onHelp={props.onHelp}
    resizable={false}
  >
    <div className="WindowAction__location">
      <div>{props.action} in</div>
      <FakeSelect title={props.location} />
      <ButtonIconSmall isDisabled hasBorder icon={img5} />
      <ButtonIconSmall isDisabled hasBorder icon={img4} />
      <ButtonIconSmall isDisabled hasBorder icon={img3} />
      <ButtonIconSmall isDisabled hasBorder icon={img2} />
      <ButtonIconSmall isDisabled hasBorder icon={img1} />
    </div>
    {Array.isArray(props.content) && (
      <SelectBox
        options={props.content}
        className="WindowAction__files"
        selected={[]}
        component={IconListIcon}
        onClick={props.onChangeName}
      />
    )}
    <div className="WindowAction__footer">
      <div className="WindowAction__action-inputs">
        <div className="WindowAction__input">
          File name:
          <InputText onChange={props.onChangeName} value={props.name} />
        </div>
        <div className="WindowAction__input">
          Type: <FakeSelect title={props.type} isDisabled />
        </div>
      </div>
      <div className="WindowAction__action-buttons">
        <ButtonForm onClick={props.onAction}>{props.action}</ButtonForm>
        <ButtonForm onClick={props.onCancel}>Cancel</ButtonForm>
      </div>
    </div>
  </WindowAbstract>
);

WindowAction.defaultProps = {
  onAction: noop,
  onCancel: noop,
  onHelp: noop,
  action: 'Save??',
  location: 'Desktop',
  content: null,
  name: '',
};

export default WindowAction;
