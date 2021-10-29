import React from 'react';
import CarouselCards from '../CarouselCards/index';
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('cards are rendering correctly with fake data', () => {
  const fakeArray = ["http://prcagrimex.co.th/en/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg","title","alt","www.google.com","idx",true]
  render(<CarouselCards cards={fakeArray} name="somename"/>);
});