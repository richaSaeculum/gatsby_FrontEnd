import React, { Fragment } from 'react';
import { decode } from 'html-entities';
import PostCardModern from '../../components/post-card-modern/post-card-modern';
import Pagination from '../../components/pagination/pagination';
import Layout from '../../components/layout';
import { BlogPostsWrapper, PostRow, PostGrid } from './style';

const BlogList = ({ serverData }) => {

  const { currentPage, data, totalPage } = serverData;

  return (
    <Layout>
      <BlogPostsWrapper>
        <PostRow>
          {(data || []).map((item, index) => {
            //get Blog image
            // const featuredImage = getImage(node.featuredImage?.node?.localFile);
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
              <Fragment key={index}>
                <PostGrid>
                  <PostCardModern
                    key={item.slug}
                    title={decode(item.title.rendered) || item.slug}
                    // image={featuredImage}
                    url={item.id}
                    description={item.excerpt.rendered}
                    date={item.date}
                    tags={item.tags}
                    placeholderBG={setColor}
                  />
                </PostGrid>
              </Fragment>
            );
          })}
        </PostRow>
        <Pagination
          currentPage={`${currentPage}`}
          totalPage={`${totalPage}`}
        />
      </BlogPostsWrapper>
    </Layout>
  );
};

export default BlogList;
