import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../../redux/filter/filterSlice";
import { selectSortValue } from "redux/filter/selectors";
import arrowImage from "../../images/arrow-down.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 25px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 10px 32px 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  appearance: none;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  background: url(${arrowImage}) no-repeat 90% center;
  background-size: 15px;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #555;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const Option = styled.option`
  padding: 10px;
  background-color: white;
  color: black;
`;

export const SortSelect = () => {
  const dispatch = useDispatch();
  const sortValue = useSelector(selectSortValue);

  return (
    <Container>
      <Label>Sort by</Label>
      <Select
        value={sortValue}
        onChange={(evt) => dispatch(setSortBy(evt.target.value))}
      >
        <Option value="default">Default</Option>
        <Option value="lowToHigh">Low to High</Option>
        <Option value="highToLow">High to Low</Option>
      </Select>
    </Container>
  );
};
