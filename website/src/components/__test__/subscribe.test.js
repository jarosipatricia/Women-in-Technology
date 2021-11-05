import React from 'react';
import Subscribe from '../Subscribe/index';
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

afterEach(() => {
  cleanup()
});

test('all the elements are successfully rendered on the screen', () => { 
  const component = render(<Subscribe />);
  const headerElement = component.getByTestId("subtitle");
  const textElement = component.getByTestId("subtext");
  const subTextElement =component.getByTestId("subb");
  const buttonElement = component.getByTestId("subbuton");
  const imgElement = component.getByTestId("subimg");

  expect(headerElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(subTextElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});

test('header renders with correct text and attributes', () => { 
  const component = render(<Subscribe />);
  const headerElement = component.getByTestId("subtitle");
  expect(headerElement.textContent).toBe("Subscribe to the newsletter");
  expect(headerElement).toHaveAttribute("class","sub-title");
});

test('inner div renders with the correct text', () => { 
  const component = render(<Subscribe />);
  const textElement = component.getByTestId("subtext");
  expect(textElement.textContent).toBe("We aim to accomplish more together by collaborating with SheGazette! Please subscribe to their newsletter to get regular updates about opportunities via email.");
});

test('clickable text renders with the correct text and attribute', () => {
  const component = render(<Subscribe />);
  const subTextElement = component.getByTestId("subb");
  expect(subTextElement.textContent).toBe("SheGazette");
  expect(subTextElement).toHaveAttribute("class","sub-b");
});

test('main button renders with the correct text and attributes', () => { 
  const component = render(<Subscribe />);
  const buttonElement = component.getByTestId("subbuton");
  expect(buttonElement.textContent).toBe("Subscribe");
  expect(buttonElement).toHaveAttribute("class","sub-button");
  expect(buttonElement).toHaveAttribute("role","button");
});

test('while hovering over the button the style is changing', () => {
  const component = render(<Subscribe />);
  const buttonElement = component.getByTestId("subbuton");
  fireEvent.mouseOver(buttonElement);
  expect(buttonElement).not.toHaveStyle(`color: black;`);
});

test('while hovering over the inner clickable text the cursor is changing', () => {
  const component = render(<Subscribe />);
  const textElement = component.getByTestId("subb");
  fireEvent.mouseOver(textElement);
  expect(textElement).not.toHaveStyle(`cursor: default;`);
});

test('testing the initial site URL without onClick', () => {
  expect(window.location.href).toBe("http://localhost/");
});

test('click on a specific part of a text leads to an another website', () => {
  const component = render(<Subscribe />);
  const buttonElement = component.getByTestId("subb");
  expect(buttonElement).toHaveAttribute('href','https://shegazette.co/index.html');
});

test('button is clickable, onClick is not throwing error', () => { 
  const component = render(<Subscribe />);
  const buttonElement = component.getByTestId("subbuton");
  userEvent.click(buttonElement)
  expect(window.location.href).not.toEqual("https://shegazette.co/index.html")
});

test('icon is clickable, onClick is not throwing error', () => {
  const component = render(<Subscribe />);
  const buttonElement = component.getByTestId("subimg");
  userEvent.click(buttonElement)
  expect(window.location.href).not.toEqual("https://shegazette.co/index.html")
});

test('clicking on main button will call the mocked onClick', () => {
  var location = "http://localhost/"
  const mockedOnClick = jest.fn(() => location = "https://shegazette.co/index.html");
  render(
    <button onClick={mockedOnClick}>
      Click
    </button>
  );
  expect(location).toBe("http://localhost/");
  userEvent.click(screen.getByText('Click'));
  expect(mockedOnClick).toHaveBeenCalledTimes(1);
  expect(location).toBe("https://shegazette.co/index.html");
});

test('after onClick mocked onClick is called and changes the url', () => {
  const oldLocation = window.location
  delete window.location

  //not calling the real onClick but mocking it
  const mockedClick = jest.fn().mockImplementation(() => window.location = { href: 'https://shegazette.co/index.html' } );

  render(
    <button onClick={mockedClick}>
      subscribe
    </button>
  );

  userEvent.click(screen.getByText('subscribe'));
  expect(mockedClick).toHaveBeenCalledTimes(1);
  expect(window.location.href).toBe("https://shegazette.co/index.html");
  window.location = oldLocation;
});



