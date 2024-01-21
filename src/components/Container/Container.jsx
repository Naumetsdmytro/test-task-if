import styled from "styled-components";

const Main = styled.main`
  padding: 0 10px;
`;

export const Container = ({ children }) => {
  return <Main>{children}</Main>;
};
