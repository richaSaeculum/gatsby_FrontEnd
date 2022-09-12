import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const TagPostsWrapper = styled.div`
  margin: 0 auto;
  padding-top: 120px;
  position: relative;
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }

  .post_card {
    margin-bottom: 120px;
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 990px) {
      margin-bottom: 80px;
    }
    @media (max-width: 575px) {
      margin-bottom: 60px;
    }
  }
`;

export const TagPageHeading = styled.div`
  padding-left: 210px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 120px;
  position: relative;
  @media (max-width: 1200px) {
    padding-left: 160px;
  }
  @media (max-width: 990px) {
    padding-left: 0;
    font-size: 13px;
    margin-bottom: 80px;
  }
  @media (max-width: 575px) {
    margin-bottom: 60px;
  }

  &:after {
    content: '';
    display: block;
    width: 90px;
    height: 1px;
    background: #292929;
    margin-top: 15px;
  }
`;

export const TagName = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${themeGet('colors.primary', '#D10068')};
  margin-bottom: 8px;
  @media (max-width: 990px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
  }
`;