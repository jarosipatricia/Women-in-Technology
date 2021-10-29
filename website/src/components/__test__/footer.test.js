import React from 'react';
import Footer from '../Footer/Footer';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<Footer />);
    const element = screen.getByText("Privacy Policy");
    expect(element).toBeInTheDocument();
  });