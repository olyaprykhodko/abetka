import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../src/app/home/page';

describe('Page', () => {
  it('renders a main', () => {
    render(<Home />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });
});
