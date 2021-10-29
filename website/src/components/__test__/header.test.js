import React from 'react';
import Header from '../Header/Header';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<Header />);
    const element = screen.getByText("Women in Technology");
    expect(element).toBeInTheDocument();
  });