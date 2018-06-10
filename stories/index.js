import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button/Button';
import FormButton from '../src/Button/FormButton';
import NavButton from '../src/Button/NavButton';
import StartButton from '../src/Button/StartButton';
import ProgramButton from '../src/Button/ProgramButton';
import QuickLaunchButton from '../src/Button/QuickLaunchButton';
import GenericWindow from '../src/Window/GenericWindow';
import StaticWindow from '../src/Window/StaticWindow';
import ExplorerIcon from '../src/Icon/ExplorerIcon';
import Notifications from '../src/TaskBar/Notifications';
import TaskBar from '../src/TaskBar/TaskBar';
import img from '../src/Icon/images/directory_closed.png';

const noop = () => {
  console.log('run')
};

storiesOf('Button', module)
  .add('button', () => <Button>Button</Button>)
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
  ));

storiesOf('Windows', module)
  .add('Generic window', () => <GenericWindow>Window</GenericWindow>)
  .add('Static window', () => (
    <StaticWindow
      title="Title"
      icon={img}
      onClose={ noop }
      onMinimize={ noop }
      onMaximize={ noop }
    >
      Windows
    </StaticWindow>
  ));

storiesOf('Icons', module)
  .add('ExplorerIcon', () => (
    <ExplorerIcon
      className="test"
      onClick={ noop }
      alt="Testing this testing some more"
      src={ img }
      title="Testing this testing some more"
    />
  ));

storiesOf('TaskBar', module)
  .add('TaskBar', () => (
    <TaskBar
      quickLaunch={[
        {
          alt: 'Quick1',
          onClick: noop,
          icon: img,
        },
      ]}
      openWindows={[
        {
          title: 'Program1',
          onClick: noop,
          icon: img,
        },
        {
          title: 'Program2',
          onClick: noop,
          icon: img,
        },
        {
          title: 'Program3',
          onClick: noop,
          icon: img,
          isActive: true,
        },
      ]}
    />
  ))
  .add('Notifications', () => (
    <Notifications
    />
  ))
