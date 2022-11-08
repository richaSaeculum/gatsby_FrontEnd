import axios from 'axios';
import React from 'react';
import BlogList from '../../containers/blog-list';

const BlogListPage = (props) => {
  return <BlogList serverData={props} />
}

export default BlogListPage;


export async function getServerSideProps(context) {
  let { page } = context.params;
  // const { headers, data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?page=${page}&per_page=4&_embed`);
  const { data } = await axios.get(`http://52.22.62.85:9030/api/user/articles/list?page=${page}&limit=4&status=publish`);

  return {
    props: {
      data: data.data.articles,
      totalPage: data.data.pageCount,
      currentPage: page
    }
  }
}


