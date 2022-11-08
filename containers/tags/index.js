import React from 'react';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card';
import { getCategories } from '../../utils/helpers';
import { TagPostsWrapper, TagPageHeading, TagName } from './style';

const Tags = ({ serverData }) => {
  const { posts, tag } = serverData;
  // const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{tag}</TagName> 
           {`A collection of ${posts.length} post`} 
        </TagPageHeading>
        {posts.map((item) => (
          <PostCard
            title={item.title}
            url={item.id}
            // description={item.excerpt.rendered}
            description={item.content}
            date={item.created_on}
            tags={getCategories(item.categories)}
          />
        ))}
      </TagPostsWrapper>
    </Layout>
  );
};

export default Tags;