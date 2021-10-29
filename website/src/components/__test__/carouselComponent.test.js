import React from 'react';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test('renders correctly', () => {
    render(<CarouselComponent />);
    const element = screen.getByText("Previous");
    expect(element).toBeInTheDocument();
  });