import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const UserWrapper = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  position: relative;
  min-height: calc(100vh - 85px - 78px - 22px);
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 900px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
    min-height: calc(100vh - 63px - 52px - 20px);
  }

  .post_card {
    margin-bottom: 56px;
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
export const UserAboutWrapper = styled.div`
  // padding-left: 210px;
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

  // &:after {
  //   content: '';
  //   display: block;
  //   width: 90px;
  //   height: 1px;
  //   background: #292929;
  //   margin-top: 15px;
  // }
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  align-items: top;
  gap: 48px;
`

export const UserProfileImageWrapper = styled.div`
  backeground: red;
  flex-basis: 140px;
`

export const UserProfileImage = styled.div`
  width: 140px;
  height: 140px;
  backeground: red;
  border-radius: 16px;
  border: 1px solid;
  overflow: hidden;
`

export const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
`

export const SocialIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background:  ${themeGet('colors.primary', '#D10068')};
  color: #fff;
  display: flex; 
  justify-content: center;
  align-items: center;
`

export const UserProfileDetails = styled.div`
`

export const UserName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${themeGet('colors.primary', '#D10068')};
  margin-bottom: 8px;
  @media (max-width: 990px) {
    font-size: 24px;
  }
  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

export const UserBio = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
`