import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogPostsWrapper = styled.div`
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
    padding: 80px 45px 0 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }

  .post_card {
    margin-bottom: 120px;
    @media (max-width: 990px) {
      margin-bottom: 90px;
    }
    @media (max-width: 575px) {
      margin-bottom: 60px;
    }
  }
`;

export const PostRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  margin-bottom: 60px;
  @media (max-width: 990px) {
    margin-bottom: 40px;
  }
  @media (max-width: 575px) {
    margin-bottom: 30px;
  }
`;

export const PostGrid = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 20px;
  margin-bottom: 90px;
  @media (max-width: 990px) {
    margin-bottom: 70px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (max-width: 575px) {
    margin-bottom: 50px;
  }
`;
