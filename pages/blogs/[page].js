import axios from 'axios';
import React from 'react';
import BlogList from '../../containers/blog-list';
import { API_URL } from '../../utils/constants';

const BlogListPage = (props) => {
  return <BlogList serverData={props} />
}

export default BlogListPage;


export async function getServerSideProps(context) {
  let { page } = context.params;
  // const { headers, data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?page=${page}&per_page=4&_embed`);
  const { data } = await axios.get(`${API_URL}user/articles/list?page=${page}&limit=4&status=publish`);

  return {
    props: {
      data: data.data.articles,
      totalPage: data.data.pageCount,
      currentPage: page
    }
  }
}


