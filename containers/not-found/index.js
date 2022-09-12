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
import ResetCSS from '../../components/reset-css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const NotFound = () => {

  return (
    <>
      <ResetCSS />
      <Navbar />
      <NotFoundWrapper>
        <NotFoundContent>
          <h1>This Page Was Lost</h1>
          <p>
            The Page You are looking for isnot available. Try to search again or
            use the Go Back button below.
          </p>
          <Goback>
            <Link href="/">
              <div>
                <Icon>
                  <IoMdArrowRoundBack />
                </Icon>
                Go Back
              </div>
            </Link>
            {/* <Link href="/">
              Go Back
            </Link> */}
          </Goback>
        </NotFoundContent>
        {/* <NotFoundImage>
          <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="author" /> 
        </NotFoundImage> */}
      </NotFoundWrapper>
      <Footer>
        Copyright &copy; {new Date().getFullYear()}
        <a href="https://redq.io/"> RedQ, Inc.</a>
      </Footer>
    </>
  );
};

export default NotFound;
