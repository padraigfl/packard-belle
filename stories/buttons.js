import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/Button/Button';
import FormButton from '../src/Button/FormButton';
import NavButton from '../src/Button/NavButton';
import StartButton from '../src/Button/StartButton';
import ProgramButton from '../src/Button/ProgramButton';
import QuickLaunchButton from '../src/Button/QuickLaunchButton';
import img from '../src/Icon/images/directory_closed.png';

const noop = () => {
  console.log('run')
};

storiesOf('Button', module)
  .add('form button', () => <FormButton>Button</FormButton>)
  .add('nav button', () => <NavButton>_</NavButton>)
  .add('start button', () => <StartButton/>)
  .add('program button', () => (
    <ProgramButton
      title="Active"
      icon={img}
      onClick={noop}
    />
  ))
  .add('quick launch button', () => (
    <QuickLaunchButton
      icon={img}
      onClick={noop}
    />
  ))
  .add('button', () => <Button>Button</Button>);
