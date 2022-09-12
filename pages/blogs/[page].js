import axios from 'axios';
import React from 'react';
import BlogList from '../../containers/blog-list';

const BlogListPage = (props) => {
  return <BlogList serverData={props} />
}

export default BlogListPage;


export async function getServerSideProps(context) {
  let { page } = context.params;
  const { headers, data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?page=${page}&per_page=4`);
 
  return {
    props: {
      data,
      totalPage: headers["x-wp-totalpages"],
      currentPage: page
    }
  }
}


