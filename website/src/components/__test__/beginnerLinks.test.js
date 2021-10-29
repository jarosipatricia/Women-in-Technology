import React from 'react';
import BeginnersLinks from '../BeginnersLinks/BeginnersLinks';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<BeginnersLinks />);
    const element = screen.getByText("New to Github and Open Source Contributions?");
    expect(element).toBeInTheDocument();
  });