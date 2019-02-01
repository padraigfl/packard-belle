import React from 'react';
import { render, cleanup } from 'react-testing-library';
import StandardMenu from '../StandardMenu';
import 'jest-dom/extend-expect';

const option = { title: 'test', onClick: jest.fn() };

describe('<StandardMenu />', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders empty', () => {
    const closeOnClick = jest.fn();
    const { getByText } = render(<StandardMenu closeOnClick={closeOnClick} />);
    expect(getByText('(Empty)')).toHaveClass('StandardMenuItem__button');
    expect(getByText('(Empty)')).toHaveAttribute('disabled');
    expect(closeOnClick).not.toHaveBeenCalled();
  });

  it('renders nested options', () => {
    const { container } = render(
      <StandardMenu
        closeOnClick={jest.fn()}
        options={[
          option,
          {
            ...option,
            title: 'test2',
            options: [option],
          },
        ]}
      />
    );
    expect(container.getElementsByClassName('StandardMenu')).toHaveLength(2);
    expect(container.getElementsByClassName('StandardMenuItem')).toHaveLength(
      3
    );
  });
});
