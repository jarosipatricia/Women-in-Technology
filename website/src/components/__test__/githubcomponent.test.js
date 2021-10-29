import React from 'react';
import Githubcomponent from '../Github/Githubcomponent';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders correctly', () => {
    render(<Githubcomponent />);
    const element = screen.getByText("Github Repositories to Star");
    expect(element).toBeInTheDocument();
  });