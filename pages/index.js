import axios from 'axios'
import Head from 'next/head'
import Home from '../containers/home'


export default function MainPage(props) {
  return <Home serverData={props} />
}


export async function getServerSideProps() {

  const { headers, status, statusText, data } = await axios.get(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts`);

  return {
    props: {
      headers,
      status,
      statusText,
      data,
    }
  }
}