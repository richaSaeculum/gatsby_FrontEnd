import React from 'react';
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
  totalPage,
  className,
  ...props
}) => {


  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage>
        {currentPage != 1 && (
          <Link href={`/blogs/${parseInt(currentPage) - 1}`} passHref>
            <a>
              <IoMdArrowRoundBack />
            </a>
          </Link>
        )}
      </PrevPage>

      <PageNumber>{`Page ${currentPage} Of ${totalPage}`}</PageNumber>

      <NextPage>
        {totalPage != currentPage && (
          <Link href={`/blogs/${parseInt(currentPage) + 1}`}>
            <a>
              <IoMdArrowRoundForward />
            </a>
          </Link>
        )}
      </NextPage>
    </PaginationWrapper>
  );
};

export default Pagination;
