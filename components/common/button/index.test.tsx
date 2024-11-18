import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index.tsx';

describe('Button', () => {
  it('should render the button with the correct text', () => {
    const component = render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    assert.ok(button);
    component.unmount();
  });

  it('should render the button with the correct class', () => {
    const component = render(
      <Button className="custom-class">Click me</Button>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    assert.ok(button.classList.contains('custom-class'));
    component.unmount();
  });

  it('should call the function when the button is clicked', async () => {
    const onClick = mock.fn();
    const component = render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    assert.ok(onClick.mock.calls.length === 1);
    component.unmount();
  });
});
