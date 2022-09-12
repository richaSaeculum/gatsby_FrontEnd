import axios from 'axios'
import React from 'react'
import BlogPost from '../containers/blog-post'

const BlogDetailsPage = (props) => {
  return <BlogPost serverData={props} />
}

export default BlogDetailsPage


export async function getServerSideProps(context) {
  let { postid } = context.params;

  const { data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts/${postid}?_embed`);
  const res = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?page=1&per_page=5`);
  const { data: tags } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/categories?page=1&per_page=100`);

  return {
    props: {
      post: data,
      featuredPosts: res.data,
      tagsList: tags
    }
  }
}