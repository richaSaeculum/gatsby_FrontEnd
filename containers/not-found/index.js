import * as React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';
import {
  NotFoundWrapper,
  NotFoundContent,
  NotFoundImage,
  Goback,
  Icon,
} from './style';


const NotFound = () => {

  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>This Page Was Lost</h1>
        <p>
          The Page You are looking for isnot available. Try to search again or
          use the Go Back button below.
        </p>
        <Goback>
          <Link href="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
            Go Back
          </Link>
        </Goback>
      </NotFoundContent>
      <NotFoundImage>
        {/* <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="author" /> */}
      </NotFoundImage>
    </NotFoundWrapper>
  );
};

export default NotFound;
