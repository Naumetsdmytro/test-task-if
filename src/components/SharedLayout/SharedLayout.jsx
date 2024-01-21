import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";

import { Loader } from "components/Loader";

const Header = styled.header`
  margin-bottom: 20px;
  padding: 20px 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  @media (min-width: 480px) {
    font-size: 32px;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Title>Products</Title>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
