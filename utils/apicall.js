
import axios from 'axios'

export default async function ApiCall({ url }) {
  try {
    const res = await axios.get(url)
    return res
  } catch (err) {
    console.log(err)
    return err.res
  }
} 