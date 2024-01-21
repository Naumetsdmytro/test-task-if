import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SearchBar } from "./SearchBar";

const mockStore = configureStore([]);

describe("SearchBar Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filter: {
        searchText: "",
      },
    });
  });

  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("dispatches setSearchText action on input change", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "Search Text" } });

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "filter/setSearchText", payload: "Search Text" },
    ]);
  });
});
