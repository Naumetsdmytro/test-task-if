import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductCard } from "components/ProductCard";
import { Loader } from "components/Loader";
import { Container } from "components/Container";
import { selectError, selectIsLoading } from "redux/products/selectors";
import { fetchProductById } from "redux/products/operations";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [productId, dispatch]);

  const isNeedToShow = !isLoading && !error;

  return <Container>{isNeedToShow ? <ProductCard /> : <Loader />}</Container>;
};

export default ProductDetails;
