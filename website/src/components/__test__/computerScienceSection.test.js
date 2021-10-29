import React from 'react';
import ComputerScienceSection from '../ComputerScienceSection/index';
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test('renders correctly', () => {
    render(<ComputerScienceSection />);
    const element = screen.getByText("Explore Yourself in the World Of CS");
    expect(element).toBeInTheDocument();
  });