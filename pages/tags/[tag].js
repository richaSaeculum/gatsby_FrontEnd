import axios from 'axios';
import React from 'react';
import Tags from '../../containers/tags';
import { API_URL } from '../../utils/constants';

const TagsPage = (props) => {
  return <Tags serverData={props} />
}

export default TagsPage;

export async function getServerSideProps(context) {
  let { tagid, tag } = context.query;

  // const { data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?categories=${tagid}&_embed`);
  const { data } = await axios.get(`${API_URL}user/articles/list?category=${tagid}&status=publish`);

  return {
    props: {
      tag,
      posts: data.data.articles,
    }
  }
}
