import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectVisibleProducts } from "redux/products/selectors";
import { ProductsListItem } from "../ProductsListItem";

const StyledProductsList = styled.ul`
  display: grid;
  grid-gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 20px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NoProductsMessage = styled.div`
  text-align: center;
  margin: 50px 0;
  font-size: 20px;
  color: #666;
`;

export const ProductsList = ({ location }) => {
  const products = useSelector(selectVisibleProducts);
  return (
    <>
      {products.length > 0 ? (
        <StyledProductsList>
          {products.map(({ id, name, imageUrl, price }) => {
            return (
              <ProductsListItem
                key={id}
                id={id}
                imageUrl={imageUrl}
                name={name}
                price={price}
                location={location}
              />
            );
          })}
        </StyledProductsList>
      ) : (
        <NoProductsMessage>
          No products found on this page matching your search.
        </NoProductsMessage>
      )}
    </>
  );
};
