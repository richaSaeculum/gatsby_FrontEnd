import axios from 'axios';
import React from 'react';
import Tags from '../../containers/tags';

const TagsPage = (props) => {
  return <Tags serverData={props} />
}

export default TagsPage;

export async function getServerSideProps(context) {
  let { tagid, tag } = context.query;

  const { data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?categories=${tagid}&_embed`);

  return {
    props: {
      tag,
      posts: data,
    }
  }
}
