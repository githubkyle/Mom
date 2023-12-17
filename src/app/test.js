import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders app and fetches data from the backend", async () => {
  // Mock the backend API response
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue({ message: "Data from MongoDB" })
  });

  // Render the React component
  render(<App />);

  // Wait for the component to render
  const messageElement = await screen.findByText(/Data from MongoDB/i);

  // Assert that the component displays the expected message
  expect(messageElement).toBeInTheDocument();
});
