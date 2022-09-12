import React from 'react';
import Link from 'next/link';
import Button from '../../../components/button/button';
import PostCardModern from '../../../components/post-card-modern/post-card-modern';
import BlogPostsWrapper, { PostRow, PostGrid, SeeMore } from './style';
import { getCategories } from '../../../utils/helpers';

const Posts = ({ serverData }) => {

  return (
    <BlogPostsWrapper>
      <PostRow>
        {serverData.data.map((item) => {
          const title = item.title.rendered || item.slug;

          let tags = getCategories(item._embedded["wp:term"][0]);
          // Random Placeholder Color
          const placeholderColors = [
            '#55efc4',
            '#81ecec',
            '#74b9ff',
            '#a29bfe',
            '#ffeaa7',
            '#fab1a0',
            '#e17055',
            '#0984e3',
            '#badc58',
            '#c7ecee',
          ];
          const setColor =
            placeholderColors[
            Math.floor(Math.random() * placeholderColors.length)
            ];

          return (
            <PostGrid key={item.slug}>
              <PostCardModern
                key={item.slug}
                title={title}
                // image={featuredImage}
                url={item.id}
                // description={item.excerpt.rendered}
                description={item.content.rendered}
                date={item.date}
                tags={tags}
                placeholderBG={setColor}
              />
            </PostGrid>
          );
        })}
      </PostRow>
      <SeeMore>
        <Link href="blogs/1" passHref>
          <Button title="See more" type="submit" />
        </Link>
      </SeeMore>
    </BlogPostsWrapper>
  );
};

export default Posts;



