import { render, screen } from '@testing-library/react';
import Icon from './Icon';
import userEvent from '@testing-library/user-event';

describe('Icon component', function () {
  it('should render an icon component successfully', function () {
    render(<Icon onClick={function () {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('can fire onClick successfully', async function () {
    const onClick = jest.fn();
    render(<Icon onClick={onClick} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
