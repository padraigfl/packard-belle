import React from 'react';
import ExplorerView from '../../src/components/ExplorerView';
import img from './directory_closed.png';

const noop = () => {
  console.log('run');
};

const options = [
  {
    title: 'Test0 With a very very very long name oh wait is this okay',
    onClick: noop,
    icon: img,
  },
  { title: 'Test1', onClick: noop, icon: img },
  { title: 'Test2', onClick: noop, icon: img },
  { title: 'Test3', onClick: noop, icon: img },
  { title: 'Test4', onClick: noop, icon: img },
  { title: 'Test5', onClick: noop, icon: img },
  { title: 'Test6', onClick: noop, icon: img },
  { title: 'Test7', onClick: noop, icon: img },
  { title: 'Test8', onClick: noop, icon: img },
  { title: 'Test9', onClick: noop, icon: img },
  { title: 'TestA', onClick: noop, icon: img },
  { title: 'TestB', onClick: noop, icon: img },
  { title: 'TestC', onClick: noop, icon: img },
  { title: 'TestD', onClick: noop, icon: img },
  { title: 'TestE', onClick: noop, icon: img },
  { title: 'TestF', onClick: noop, icon: img },
];

const Desktop = {
  render: () => (
    <div
      style={{
        backgroundColor: 'white',
        width: '400px',
        height: '300px',
      }}
    >
      <ExplorerView options={options} />
    </div>
  )
}

const meta = {
  component: Desktop,
}
export default meta;