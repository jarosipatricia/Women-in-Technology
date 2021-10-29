import React from 'react';
import Inspirational from '../Inspirational/Inspirational';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<Inspirational />);
    const element = screen.getByText("Grace Hopper");
    expect(element).toBeInTheDocument();
  });