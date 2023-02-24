import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { mockRouter } from '../../__mocks__/mockRouter';
import Form from './Form';

describe('Form component', function () {
  it('should render a form component of elements successfully', function () {
    render(
      <RouterContext.Provider value={mockRouter({})}>
        <Form />
      </RouterContext.Provider>,
    );
    const form = screen.queryAllByRole('heading');
    expect(form).toBeTruthy();
  });
});
