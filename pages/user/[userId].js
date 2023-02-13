import axios from 'axios';
import React from 'react';
import Tags from '../../containers/tags';
import User from '../../containers/user';
import { API_URL } from '../../utils/constants';

const UserPage = (props) => {
  return <User />
}

export default UserPage;

export async function getServerSideProps(context) {

  console.log(context, "context")

  // let { tagid, tag } = context.query;

  // // const { data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?categories=${tagid}&_embed`);
  // const { data } = await axios.get(`${API_URL}user/articles/list?category=${tagid}&status=publish`);

  return {
    props: {
      // tag,
      // posts: data.data.articles,
    }
  }
}
