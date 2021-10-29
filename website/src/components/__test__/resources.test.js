import React from 'react';
import Resources from '../Resources/ResourcesComponent';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<Resources />);
    const element = screen.getByText("GITHUB Repositories to Star");
    expect(element).toBeInTheDocument();
  });