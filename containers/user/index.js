import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card';
import { getCategories } from '../../utils/helpers';
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io';
import { UserWrapper, UserAboutWrapper, UserProfileWrapper, UserProfileDetails, UserName, UserBio, UserProfileImageWrapper, UserProfileImage, SocialIcon, SocialIconsWrapper } from './style';

const User = ({ serverData }) => {
  // const { posts, tag } = serverData;
  // const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <UserWrapper>
        <UserAboutWrapper>
          <UserProfileWrapper>
            <UserProfileImageWrapper>
              <UserProfileImage></UserProfileImage>
            </UserProfileImageWrapper>
            <UserProfileDetails>
              <UserName>
                Author Local
              </UserName>
              <UserBio>
                lsadfk kfjds sdf we frwe a sdakja rdkjbasda daskjasdbwq qweqkwj asdassda sdiuwer ew wsdasdsdad qwwfsdasd asd dswef wds we rwerwd adsfsdwq gtrth rt grffedfedcecedc erfefrger.
              </UserBio>
              <SocialIconsWrapper>
                <SocialIcon>
                  <IoLogoFacebook size={22} />
                </SocialIcon>
                <SocialIcon>
                  <IoLogoTwitter size={22} />
                </SocialIcon>
                <SocialIcon>
                  <IoLogoInstagram size={22} />
                </SocialIcon>
                <SocialIcon>
                  <IoLogoLinkedin size={22} />
                </SocialIcon>
              </SocialIconsWrapper>
            </UserProfileDetails>
          </UserProfileWrapper>
        </UserAboutWrapper>
        {posts.map((item, index) => (
          <PostCard
            key={index}
            title={item.title}
            url={item.id}
            // description={item.excerpt.rendered}
            description={item.content}
            date={item.created_on}
            tags={getCategories(item.categories)}
          />
        ))}
      </UserWrapper>
    </Layout>
  );
};

export default User;

let posts = [
  {
    "id": 1,
    "author": 2,
    "title": "Entertainment News Today, Movie Review LIVE Updates: Cirkus Isn&#x27;t a Great Watch, Pitchers Season 2 is Engaging",
    "excerpt": "Test post excerpt",
    "status": "publish",
    "created_on": "2022-12-23 10:13:27",
    "categories": [
      {
        "postId": 1,
        "categoryId": 1,
        "category": "Entertainment"
      }
    ],
    "user_first_name": "Author",
    "user_last_name": "Local",
    "authorName": "author_local"
  },
  {
    "id": 3,
    "author": 2,
    "title": "Bigg Boss 16: What Sreejita De Revealed About Tina Dutta&#x27;s Inferiority Complex",
    "excerpt": "Test post excerpt",
    "status": "publish",
    "created_on": "2022-12-23 10:35:15",
    "categories": [
      {
        "postId": 3,
        "categoryId": 5,
        "category": "Bollywood"
      },
      {
        "postId": 3,
        "categoryId": 1,
        "category": "Entertainment"
      }
    ],
    "user_first_name": "Author",
    "user_last_name": "Local",
    "authorName": "author_local"
  }
]