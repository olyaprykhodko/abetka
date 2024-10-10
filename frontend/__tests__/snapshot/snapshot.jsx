import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../../src/app/home/page';
import Teachers from '../../src/app/teachers/page';

describe('Renders correctly', () => {
  it('homepage', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('teachers page', () => {
    const { container } = render(<Teachers />);
    expect(container).toMatchSnapshot();
  });
});
