import * as React from 'react';
import FooterWrapper from './footer.style';


const Footer = ({
  children,
  ...props
}) => {
  return <FooterWrapper {...props}>{children}</FooterWrapper>;
};

export default Footer;
