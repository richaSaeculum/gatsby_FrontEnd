import React from 'react';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card';
import { getCategories } from '../../utils/helpers';
import { UserWrapper, UserAboutWrapper, TagPageHeading, TagName } from './style';

const User = ({ serverData }) => {
  // const { posts, tag } = serverData;
  // const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <UserWrapper>
        <UserAboutWrapper>
          <TagName>{"tag"}</TagName>
          {`A collection of 2 post`}
        </UserAboutWrapper>
        {/* {posts.map((item, index) => (
          <PostCard
            key={index}
            title={item.title}
            url={item.id}
            // description={item.excerpt.rendered}
            description={item.content}
            date={item.created_on}
            tags={getCategories(item.categories)}
          />
        ))} */}
      </UserWrapper>
    </Layout>
  );
};

export default User;