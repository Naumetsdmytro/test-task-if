import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  user-select: none;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  width: 80px;
  height: 33px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    color: #a0a0a0;
    cursor: not-allowed;
    background-color: #f9f9f9;
  }

  @media (min-width: 768px) {
    width: 90px;
  }
`;

const PageInfo = styled.span`
  font-size: 16px;
  margin: 0 10px;

  @media (min-width: 768px) {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Pagination = ({ handlePageChange, page, isLastPage }) => {
  return (
    <PaginationContainer>
      <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <PageInfo>Page {page}</PageInfo>
      <Button onClick={() => handlePageChange(page + 1)} disabled={isLastPage}>
        Next
      </Button>
    </PaginationContainer>
  );
};
