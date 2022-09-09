import * as React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import {
  PaginationWrapper,
  PrevPage,
  NextPage,
  PageNumber,
} from './pagination.style';

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPage,
  className,
  ...props
}) => {


  const onNextAndPrevClick = (type) => {
    if (type === 'next') {
      setCurrentPage(parseInt(currentPage) + 1)
    } else {
      setCurrentPage(parseInt(currentPage) - 1)
    }
  }

  console.log(currentPage)

  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage onClick={() => onNextAndPrevClick('prev')}>
        {currentPage != 1 && (
          <Link href={`/page/${parseInt(currentPage) - 1}`} aria-label="Prev">
            <IoMdArrowRoundBack />
          </Link>
        )}
      </PrevPage>

      <PageNumber>{`Page ${currentPage} Of ${totalPage}`}</PageNumber>

      <NextPage onClick={() => { onNextAndPrevClick('next') }}>
        {totalPage != currentPage && (
          <Link href={`/page/${parseInt(currentPage) + 1}`} aria-label="Next">
            <IoMdArrowRoundForward />
          </Link>
        )}
      </NextPage>
    </PaginationWrapper>
  );
};

export default Pagination;
