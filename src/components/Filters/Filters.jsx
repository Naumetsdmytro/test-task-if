// Filters.js
import React from "react";
import styled from "styled-components";
import { SearchBar } from "../SearchBar";
import { SortSelect } from "../SortSelect";
import { FilterRange } from "components/FilterRange";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: end;
  }
`;

export const Filters = () => {
  return (
    <FiltersContainer>
      <SortSelect />
      <FilterRange />
      <SearchBar />
    </FiltersContainer>
  );
};
