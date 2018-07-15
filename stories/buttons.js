import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button/AbstractButton';
import FormButton from '../src/components/Button/FormButton';
import NavButton from '../src/components/Button/NavButton';
import StartButton from '../src/components/Button/StartButton';
import ProgramButton from '../src/components/Button/ProgramButton';
import QuickLaunchButton from '../src/components/Button/QuickLaunchButton';
import img from './directory_closed.png';

const noop = () => {
  console.log('run')
};

storiesOf('Button', module)
  .add('form button', () => <FormButton onClick={noop}>Button</FormButton>)
  .add('nav button', () => <NavButton />)
  .add('start button', () => <StartButton />)
  .add('program button', () => (
    <div>
      <ProgramButton
        icon={img}
        onClick={noop}
      >
        Inactive
      </ProgramButton>
      <ProgramButton
        icon={img}
        onClick={noop}
        isActive
      >
        Active
      </ProgramButton>
    </div>
  ))
  .add('quick launch button', () => (
    <QuickLaunchButton
      icon={img}
      onClick={noop}
    />
  ))
  .add('button', () => <Button>Button</Button>);
