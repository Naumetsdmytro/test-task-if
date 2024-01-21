import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductsList } from "components/ProductsList";
import { Loader } from "components/Loader";
import { Container } from "components/Container";
import { selectError, selectIsLoading } from "redux/products/selectors";
import { fetchProducts } from "redux/products/operations";
import { Filters } from "../Filters";
import { Pagination } from "components/Pagination";

const Products = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);

    setPage(pageFromUrl);
    dispatch(fetchProducts(pageFromUrl))
      .unwrap()
      .then((fetchedProducts) => {
        setIsLastPage(fetchedProducts.length < 6);
      });
  }, [dispatch, location.search]);

  const handlePageChange = (newPage) => {
    navigate(`?page=${newPage}`);
  };

  const isNeedToShow = !isLoading && !error;

  return (
    <Container>
      <Filters />
      {isNeedToShow ? (
        <>
          <ProductsList location={location} />
          <Pagination
            handlePageChange={handlePageChange}
            page={page}
            isLastPage={isLastPage}
          />
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Products;
