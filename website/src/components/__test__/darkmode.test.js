import React from 'react';
import Darkmode from '../DarkMode';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    const element = render(<Darkmode />);
    const buttonElement = element.getByTestId("darkmode");
    expect(buttonElement).toBeInTheDocument();
});

test('after clicking on a button the darkmode will set', () => {
    const element = render(<Darkmode />);
    const buttonElement = element.getByTestId("darkmode");
    fireEvent.click(buttonElement);
    expect(buttonElement.className).toBe("clicked")
});

test('after double click on button the darkmode will unset', () => {
    const element = render(<Darkmode />);
    const buttonElement = element.getByTestId("darkmode");
    fireEvent.click(buttonElement);
    expect(buttonElement.className).toBe("");
});