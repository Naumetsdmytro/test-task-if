import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background-color: #fff;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductName = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #333;
`;

const DetailsLink = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
    cursor: pointer !important;
  }
`;

export const ProductsListItem = ({ imageUrl, price, name, location, id }) => {
  return (
    <ListItem>
      <ProductImage alt={name} src={imageUrl} />
      <ProductName>{name}</ProductName>
      <ProductPrice>${price}</ProductPrice>
      <DetailsLink to={`${id}`} state={{ from: location }}>
        Show details
      </DetailsLink>
    </ListItem>
  );
};
