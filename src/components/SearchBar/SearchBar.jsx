import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { setSearchText } from "redux/filter/filterSlice";
import { selectSearchTextValue } from "redux/filter/selectors";

const SearchBarInput = styled.input`
  display: block;
  padding: 12px 15px;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(49, 138, 172, 0.5);
  }
  &::placeholder {
    color: #aaa;
  }

  @media (min-width: 768px) {
    width: 650px;
  }

  @media (min-width: 1200px) {
    width: 290px;
  }
`;

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectSearchTextValue);

  return (
    <SearchBarInput
      type="text"
      value={filter}
      placeholder="I'm looking for..."
      onChange={(evt) => dispatch(setSearchText(evt.target.value))}
    />
  );
};
