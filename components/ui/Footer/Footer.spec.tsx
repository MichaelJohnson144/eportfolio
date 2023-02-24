import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', function () {
  it('should render a footer component of elements successfully', function () {
    render(<Footer />);
    const footerNavigation = screen.getByTestId('footer');
    expect(footerNavigation).toBeTruthy();
  });
});
