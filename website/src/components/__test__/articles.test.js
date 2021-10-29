import React from 'react';
import Articles from '../Articles/Articles';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<Articles />);
    expect(screen.getByTestId("subtext")).toBeInTheDocument();
});