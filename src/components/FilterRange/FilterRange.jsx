import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { setRangePrice } from "redux/filter/filterSlice";
import { selectPriceRangeValue } from "redux/filter/selectors";

const ABSOLUTE_MIN_PRICE = 0;
const ABSOLUTE_MAX_PRICE = 10000;

const RangeSliderContainer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const Range = styled.input`
  @media (max-width: 549px) {
    display: none;
  }
  -webkit-appearance: none;
  width: 80%;
  height: 10px;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  margin-bottom: 15px;
  margin-right: 12px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #0056b3;
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #0056b3;
    }
  }
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 10px;
  width: 60px;
  margin-top: 7px;
  margin-right: 15px;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 12px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer !important;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FilterRange = () => {
  const rangeValue = useSelector(selectPriceRangeValue);

  const [minPrice, setMinPrice] = useState(rangeValue.minPrice);
  const [maxPrice, setMaxPrice] = useState(rangeValue.maxPrice);

  const dispatch = useDispatch();

  const handleMinChange = (value) => {
    setMinPrice(value);
  };

  const handleMaxChange = (value) => {
    setMaxPrice(value);
  };

  const handleApply = () => {
    let rangePriceValue = { minPrice, maxPrice };

    if (Number(minPrice) > Number(maxPrice)) {
      setMinPrice(maxPrice);
      setMaxPrice(minPrice);

      rangePriceValue = { minPrice: maxPrice, maxPrice: minPrice };
    }
    dispatch(setRangePrice(rangePriceValue));
  };

  return (
    <RangeSliderContainer>
      <Input
        type="text"
        placeholder="From"
        value={minPrice}
        onChange={(evt) => handleMinChange(evt.target.value)}
      />
      <Range
        type="range"
        min={ABSOLUTE_MIN_PRICE}
        max={ABSOLUTE_MAX_PRICE}
        value={Number(minPrice)}
        onChange={(evt) => handleMinChange(evt.target.value)}
      />
      <Range
        type="range"
        min={ABSOLUTE_MIN_PRICE}
        max={ABSOLUTE_MAX_PRICE}
        value={Number(maxPrice)}
        onChange={(evt) => handleMaxChange(evt.target.value)}
      />
      <Input
        type="text"
        placeholder="To"
        value={maxPrice}
        onChange={(evt) => handleMaxChange(evt.target.value)}
      />
      <SubmitButton onClick={handleApply}>OK</SubmitButton>
    </RangeSliderContainer>
  );
};
