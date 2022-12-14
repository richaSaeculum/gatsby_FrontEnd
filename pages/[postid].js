import axios from 'axios'
import React from 'react'
import BlogPost from '../containers/blog-post'
import { API_URL } from '../utils/constants'

const BlogDetailsPage = (props) => {
  return <BlogPost serverData={props} />
}

export default BlogDetailsPage


export async function getServerSideProps(context) {
  let { postid } = context.params;

  // const { data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts/${postid}?_embed`);
  // const res = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?page=1&per_page=5`);
  // const { data: tags } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/categories?page=1&per_page=100`);

  const { data } = await axios.get(`${API_URL}user/article/${postid}`);
  const res = await axios.get(`${API_URL}user/articles/list?page=1&limit=5&status=publish`);
  const catgRes = await axios.get(`${API_URL}user/categories/list`);

  return {
    props: {
      post: data.data,
      featuredPosts: res.data.data.articles,
      tagsList: catgRes.data.data.categories
    }
  }
}