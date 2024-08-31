import { create } from 'zustand'

type response<T> = {
  data: T
  ok: boolean
  status: number
  statusText: string
  type: string
}

type State = {
  list: ImageItem[]
}

type Actions = {
  initial: () => Promise<void>
}

const { GATSBY_API_URL } = process.env

export const getServerData = async <T>(): Promise<response<T>> => {
  try {
    const res = await fetch(`${GATSBY_API_URL}/sunset/getImages`)
    if (!res.ok) throw new Error(`Couldn’t get response!`)
    const { data } = await res.json()
    return {
      status: 200,
      data,
    } as response<any>
  } catch (error) {
    return {
      status: 400,
      data: null,
    } as response<any>
  }
}

export const useImageStore = create<State & Actions>(() => ({
  list: [],

  // 初始获取
  initial: async () => {
    // const data: ImageItem[] = await getServerData()
    // set((state) => ({ todoList: data }))
  },
}))
