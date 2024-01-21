import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { setRangePrice } from "../../redux/filter/filterSlice";
import { FilterRange } from "./FilterRange";

const mockStore = configureStore([]);

describe("FilterRange Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filter: {
        rangePrice: "",
      },
    });
  });

  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <FilterRange />
      </Provider>
    );

    expect(screen.getByLabelText("From")).toBeTruthy();
    expect(screen.getByLabelText("To")).toBeTruthy();
    expect(screen.getByRole("button", { name: "OK" })).toBeTruthy();
  });

  it("dispatches setRangePrice action on apply button click", () => {
    render(
      <Provider store={store}>
        <FilterRange />
      </Provider>
    );

    const fromInput = screen.getByLabelText("From");
    const toInput = screen.getByLabelText("To");
    const applyButton = screen.getByRole("button", { name: "OK" });

    fireEvent.change(fromInput, { target: { value: "100" } });
    fireEvent.change(toInput, { target: { value: "200" } });
    fireEvent.click(applyButton);

    const actions = store.getActions();
    expect(actions).toEqual([setRangePrice("100-200")]);
  });
});
