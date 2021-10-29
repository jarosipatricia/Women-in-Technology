import React from 'react';
import Inforgraphic from '../inforgraphic/infographics';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<Inforgraphic />);
    const element = screen.getByText("Infographics");
    expect(element).toBeInTheDocument();
  });