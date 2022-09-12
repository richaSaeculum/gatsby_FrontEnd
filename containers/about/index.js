import * as React from 'react';
import SocialProfile from '../../components/social-profile/social-profile';
import Layout from '../../components/layout';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: '#',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: '#',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: '#',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoLinkedin />,
    url: '#',
    tooltip: 'Linked In',
  },
];



const About = () => {

  return (
    <Layout>
      <AboutWrapper>
        <AboutPageTitle>
          <h2>About The Common Logic</h2>
          <p>
            The Common Logic is a beautiful Blog theme designed to showcase your
            work in style. Perfect for designers, artists, photographers and
            developers to use for their portfolio website.
          </p>
        </AboutPageTitle>

        <AboutImage>
          {/* <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="about" /> */}
        </AboutImage>

        <AboutDetails>
          <h2>Hey there, what’s up?</h2>
          <p>
            XYZ Team is a creative agency specializing in building scalable,
            high-performance web & mobile application. Our main concern is
            creating more value into the application so that can help our
            customers to grow their business.
          </p>
          <p>
            XYZ Team is a creative agency specializing in building scalable,
            high-performance web & mobile application. Our main concern is
            creating more value into the application so that can help our
            customers to grow their business.
          </p>

          <SocialProfiles>
            <SocialProfile items={SocialLinks} />
          </SocialProfiles>
        </AboutDetails>
      </AboutWrapper>
    </Layout>
  );
};

export default About;
