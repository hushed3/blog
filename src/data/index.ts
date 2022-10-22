import { GetServerDataReturn } from 'gatsby'
import { encryp } from '../utils/encryp'

const { GATSBY_API_URL } = process.env

export const getServerData = async <T>(): GetServerDataReturn<T | null> => {
  try {
    const keywords = encryp(`hush${new Date().getTime()}`) as string
    const res = await fetch(`${GATSBY_API_URL}/sunset/getImages`, { headers: { keywords } })
    if (!res.ok) throw new Error(`Couldn’t get response!`)
    console.log(res)
    const { data } = await res.json()
    return {
      status: 200,
      props: data,
    }
  } catch (error) {
    return {
      status: 400,
      props: null,
    }
  }
}
