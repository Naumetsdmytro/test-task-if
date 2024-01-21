import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectSelectedProduct } from "redux/products/selectors";
import leftArrow from "../../images/arrow-left.png";

const CardContainer = styled.div`
  display: grid;
  place-items: center;
  max-width: 80%;
  margin: auto;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 22px;
  left: 20px;
`;

const BackImage = styled.img`
  display: block;
  width: 30px;
  height: 30px;

  @media (min-width: 480px) {
    display: none;
  }
`;

const BackButton = styled.button`
  display: none;
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 480px) {
    display: inline-block;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 10px;
  @media (min-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    max-width: 80%;
  }

  @media (min-width: 1000px) {
    max-width: 65%;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ProductInfo = styled.div`
  display: grid;
  grid-template-areas: "name price";
  justify-content: center;
  align-items: end;
  gap: 25px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const ProductName = styled.p`
  grid-area: name;
  color: #333;
`;

const ProductPrice = styled.p`
  grid-area: price;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
  padding: 15px;
  margin: 10px 0;
  border-top: 1px solid #eee;
  max-width: 100%;
  text-align: left;
  line-height: 1.6;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`;

export const ProductCard = () => {
  const { largeImgUrl, price, name, description } = useSelector(
    selectSelectedProduct
  );
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <BackLink to={backLinkHref}>
        <BackButton>Go back</BackButton>
        <BackImage src={leftArrow} />
      </BackLink>
      <CardContainer>
        <ImageContainer>
          <ProductImage alt={name} src={largeImgUrl} />
        </ImageContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>${price}</ProductPrice>
        </ProductInfo>
        <ProductDescription>{description}</ProductDescription>
      </CardContainer>
    </>
  );
};
