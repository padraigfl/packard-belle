import React from 'react';

import FormButton from '../../src/components/ButtonForm';
import NavButton from '../../src/components/ButtonNav';
import StartButton from '../../src/components/ButtonStart';
import ProgramButton from '../../src/components/ButtonProgram';
import SmallIconButton from '../../src/components/ButtonIconSmall';
import LargeIconButton from '../../src/components/ButtonIconLarge';
import img from './directory_closed.png';

const noop = () => {
  console.log('run');
};

const meta = {
  component: FormButton,
};
export default meta;
export const Form = {
  render: () => (
    <div>
      <p>
        <FormButton onClick={noop}>Regular</FormButton>
      </p>
      <p>
        
        <FormButton className="active" onClick={noop}>
          Pressed
        </FormButton>
      </p>
      <p>
        <FormButton onClick={noop} isDisabled>
          Disabled
        </FormButton>
      </p>
    </div>
  )
};
export const Nav = {
  render: () => <NavButton />
}
export const Start = {
  render: () => <StartButton />
}
export const Program = {
  render: () => (
    <div>
      <ProgramButton icon={img} onClick={noop}>
        Inactive
      </ProgramButton>
      <ProgramButton icon={img} onClick={noop} isActive>
        Active
      </ProgramButton>
      <ProgramButton icon={img} onClick={noop} className="clicked">
        Clicked
      </ProgramButton>
    </div>
  )
}
export const SmallIcon = {
  render: () => (
    <div>
      <SmallIconButton icon={img} onClick={noop} /> Regular
      <br />
      <SmallIconButton icon={img} onClick={noop} isDisabled /> Disabled
      <br />
      <SmallIconButton
        icon={img}
        onClick={noop}
        isActive
        className="clicked"
      />{' '}
      Active
    </div>
  )
}
export const LargeIcon = {
  render: () => (
    <div>
      <LargeIconButton onClick={noop} icon={img} title="Button" />
      <LargeIconButton onClick={noop} icon={img} title="Disabled" isDisabled />
    </div>
  )
}
