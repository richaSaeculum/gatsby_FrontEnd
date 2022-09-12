import React from 'react';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card';
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
            key={item.slug}
            title={item.title?.rendered}
            url={item.id}
            // description={item.excerpt.rendered}
            description={item.content.rendered}
            date={item.date}
            tags={item.tags}
          />
        ))}
      </TagPostsWrapper>
    </Layout>
  );
};

export default Tags;