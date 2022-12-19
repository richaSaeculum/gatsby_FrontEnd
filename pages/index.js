import axios from 'axios'
import Home from '../containers/home'
import { API_URL } from '../utils/constants';

export default function MainPage(props) {
  return <Home serverData={props} />
}


export async function getServerSideProps() {

  // const { headers, data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?_embed`);
  const { data } = await axios.get(`${API_URL}user/articles/list?page=1&limit=5&status=publish`);

  // const { data } = await axios.get(``)

  return {
    props: {
      headers: {},
      data: data.data.articles,
    }
  }
}