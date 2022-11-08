import axios from 'axios'
import Home from '../containers/home'

export default function MainPage(props) {
  return <Home serverData={props} />
}


export async function getServerSideProps() {

  // const { headers, data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts?_embed`);
  const { data } = await axios.get(`http://52.22.62.85:9030/api/user/articles/list?page=1&limit=5&status=publish`);

  // const { data } = await axios.get(``)

  return {
    props: {
      headers: {},
      data: data.data.articles,
    }
  }
}