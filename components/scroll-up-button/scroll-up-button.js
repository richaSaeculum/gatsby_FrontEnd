import React from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import ScrollUpButtonWrapper from './scroll-up-button.style';


const ScrollUpButton = (
  props
) => {
  return (
    <ScrollUpButtonWrapper {...props}>
      <IoMdArrowRoundUp />
    </ScrollUpButtonWrapper>
  );
};

export default ScrollUpButton;
