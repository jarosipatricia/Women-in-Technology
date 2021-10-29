import React from 'react';
import Card from '../Card/index';
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';


//https://stackoverflow.com/questions/65307960/how-can-mock-the-value-of-a-state-and-data-in-my-react-test
test("mock fetch call, valid responce from db should return applications", 
  async () => {
    const fakeResponse = {
        image: "http://prcagrimex.co.th/en/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg",
        title: "fake title",
        alt: "fake alt",
        link: "http://prcagrimex.co.th/en/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg",
        idx: "fake idx",
        isBig: true,
    };
//spyOn allows to mock either the whole module or the individual functions of the module
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse),
      };
      return Promise.resolve(fetchResponse);
    });

    //act() makes sure that anything that might take time - rendering, user events, data fetching - within it is completed before test assertions are run
    await act(async () => {
      render(<Card image={fakeResponse.image} title={fakeResponse.title} link={fakeResponse.link} alt={fakeResponse.alt} idx={fakeResponse.idx} isBig={fakeResponse.isBig} />);
    });

    expect(screen.getByAltText("fake alt")).toBeInTheDocument();
    window.fetch.mockRestore();
  }
);