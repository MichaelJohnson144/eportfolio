import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileMenuToggle from './MobileMenuToggle';

describe('MobileMenuToggle component', function () {
  it('should render a mobile menu component of elements successfully', function () {
    render(<MobileMenuToggle menuIsOpen={true} onClick={function () {}} />);
    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('should call onClick once successfully', async function () {
    const onClick = jest.fn();
    render(<MobileMenuToggle menuIsOpen={true} onClick={onClick} />);
    const button: HTMLButtonElement = screen.getByRole('button');
    await userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });

  it('should show the default icon if the menu component is marked as closed successfully', function () {
    const onClick = jest.fn();
    render(<MobileMenuToggle menuIsOpen={false} onClick={onClick} />);
    const icon: HTMLOrSVGElement = screen.getByTestId('MenuRounded');
    expect(icon).toBeTruthy();
  });

  it('should show the open icon if the menu component is marked as open successfully', function () {
    const onClick = jest.fn();
    render(<MobileMenuToggle menuIsOpen={true} onClick={onClick} />);
    const icon: HTMLOrSVGElement = screen.getByTestId('MenuOpenRounded');
    expect(icon).toBeTruthy();
  });
});
