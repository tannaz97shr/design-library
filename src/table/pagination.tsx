import React from 'react';

import { PaginationProps } from './type';
import TableStyles from './styled';
import ArrowRightSvg from '../assets/icon/arrow-right.svg';

const Pagination = (props: PaginationProps) => {
  const {
    StyledPagination,
    StyledPageSelector,
    StyledPageIndex,
    StyledArrow,
    StyledPageSituation,
  } = TableStyles;
  const {
    pageCount,
    currentPage,
    pageIndexClicked,
    totalRows,
    perPage
  } = props;
  let pagesArray = [];
  let loopSteps = pageCount ? (pageCount > 5 ? 5 : pageCount) : 1;
  for (let i = 1; i <= loopSteps; i++) {
    pagesArray.push(i);
  }

  const visiblePaginationAreaWidth = 5;
  const notAtFirst = currentPage - visiblePaginationAreaWidth > 0;
  const notAtLast =
    currentPage + visiblePaginationAreaWidth - pageCount - 1 < 0;
  const middlePagination = [...new Array(visiblePaginationAreaWidth)].map(
    (_, index) => {
      const page =
        index + (currentPage - Math.floor(visiblePaginationAreaWidth / 2));
      return (
        <StyledPageIndex
          onClick={() => pageIndexClicked(page)}
          isSelected={page === currentPage}
        >
          {page}
        </StyledPageIndex>
      );
    }
  );
  const firstPagination = [
    ...new Array(
      visiblePaginationAreaWidth < pageCount
        ? visiblePaginationAreaWidth
        : pageCount
    ),
  ].map((_, index) => {
    const page = index + 1;
    return (
      <StyledPageIndex
        onClick={() => pageIndexClicked(page)}
        isSelected={page === currentPage}
      >
        {page}
      </StyledPageIndex>
    );
  });
  const lastPagination = [...new Array(visiblePaginationAreaWidth)].map(
    (_, index) => {
      const page = pageCount - (visiblePaginationAreaWidth - index) + 1;
      return (
        <StyledPageIndex
          onClick={() => pageIndexClicked(page)}
          isSelected={page === currentPage}
        >
          {page}
        </StyledPageIndex>
      );
    }
  );
  const renderLongPages = () => (
    <>
      {!notAtFirst && firstPagination}
      {notAtFirst && (
        <>
          <StyledPageIndex
            onClick={() => pageIndexClicked()}
            isSelected={1 === currentPage}
          >
            {1}
          </StyledPageIndex>
          <StyledPageIndex isDots>...</StyledPageIndex>
        </>
      )}
      {notAtFirst && notAtLast && middlePagination}
      {notAtLast && (
        <>
          <StyledPageIndex isDots>...</StyledPageIndex>
          <StyledPageIndex
            onClick={() => pageIndexClicked()}
            isSelected={pageCount === currentPage}
          >
            {pageCount}
          </StyledPageIndex>
        </>
      )}
      {!notAtLast && lastPagination}
    </>
  );
  const renderShortPages = () => {
    return [...new Array(pageCount)].map((_, index) => {
      const page = index + 1;
      return (
        <StyledPageIndex
          onClick={() => pageIndexClicked(page)}
          isSelected={page === currentPage}
        >
          {page}
        </StyledPageIndex>
      );
    });
  };
  const firstRow = (currentPage * perPage) - perPage + 1;
  const lastRow = currentPage === pageCount ? totalRows : (currentPage * perPage);
  return (
    <StyledPagination>
      <StyledPageSituation>
        {firstRow} - {lastRow} از {totalRows}
      </StyledPageSituation>
      <StyledPageSelector>
        <StyledArrow>
        <img src={ArrowRightSvg}/>
        </StyledArrow>
        {2 * visiblePaginationAreaWidth - 1 < pageCount
          ? renderLongPages()
          : renderShortPages()}
        <StyledArrow left>
        <img src={ArrowRightSvg}/>
        </StyledArrow>
      </StyledPageSelector>
    </StyledPagination>
  );
};

export default Pagination;
