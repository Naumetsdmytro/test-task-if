import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        height="130"
        width="130"
        color="#007bff"
        secondaryColor="#99ccff"
        ariaLabel="oval-loading"
        strokeWidth="2"
        strokeWidthSecondary="2"
      />
    </LoaderContainer>
  );
};
