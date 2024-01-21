import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SortSelect } from "./SortSelect";

const mockStore = configureStore([]);

describe("SortSelect Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filter: {
        sortBy: "default",
      },
    });
  });

  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <SortSelect />
      </Provider>
    );

    expect(screen.getByText("Sort by")).toBeTruthy();
    expect(screen.getByRole("combobox")).toBeTruthy();
  });

  it("dispatches setSortBy action on select change", () => {
    render(
      <Provider store={store}>
        <SortSelect />
      </Provider>
    );

    const selectElement = screen.getByRole("combobox");

    fireEvent.change(selectElement, { target: { value: "lowToHigh" } });

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "filter/setSortBy", payload: "lowToHigh" },
    ]);
  });
});
