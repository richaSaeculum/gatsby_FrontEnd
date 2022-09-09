import React, { Fragment, useEffect, useState } from 'react';
import PostCardModern from '../../components/post-card-modern/post-card-modern';
import Pagination from '../../components/pagination/pagination';
import { BlogPostsWrapper, PostRow, PostGrid } from './style';
import Layout from '../../components/layout';
import axios from 'axios'
import ApiCall from '../../utils/apicall';
import { useParams } from 'react-router-dom';

const BlogList = (props) => {
  // const { data } = props;
  // const Posts = data.allWpPost.edges;
  // const { currentPage, numPages } = props.pageContext;\

  const params = useParams();
  const { id } = params;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(id));
  const [numPages, setNumPages] = useState();

  const getPosts = async () => {
    const res = await ApiCall({ url: `https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=2` });
    if (res && res.status === 200) {
      setPosts(res.data);
      setNumPages(res.headers['x-wp-totalpages'])
    }
  }

  useEffect(() => {
    getPosts();
  }, [currentPage])


  return (
    <Layout>
      <BlogPostsWrapper>
        <PostRow>
          {(posts || []).map((item, index) => {
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
                    title={item.title.rendered || item.slug}
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
          setCurrentPage={setCurrentPage}
          totalPage={`${numPages}`}
        />
      </BlogPostsWrapper>
    </Layout>
  );
};

export default BlogList;
