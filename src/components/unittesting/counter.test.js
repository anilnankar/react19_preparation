import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";

// Test Case 1: Component renders properly
test("renders Counter component", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Count:/i);
  expect(counterElement).toBeInTheDocument();
});

// Test Case 2: Check initial count value
test("initial count is 0", () => {
  render(<Counter />);
  const countValue = screen.getByTestId("count-value");
  expect(countValue).toHaveTextContent("Count: 0");
});

// Test Case 3: Increment button works
test("increments count when button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
});

// Test Case 4: Decrement button works
test("decrements count when button is clicked", () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: -1");
});
