import React from 'react';
import Divider from '../Divider/index';
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test('renders correctly', () => {
    render(<Divider />);
  });