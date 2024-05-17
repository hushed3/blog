import { useEffect, useState } from 'react'

import SEO from '@/components/SEO'

import { useStyles } from './styles/_sunset.style'
import { HeadFC } from 'gatsby'

// import { getServerData } from '@/data/index'

const Sunset = () => {
  const { styles } = useStyles()
  const [imageList, setImageList] = useState<ImageItem[]>([])
  const [selected, setSelected] = useState<ImageItem | null>(null)
  const [move, setMove] = useState(true)

  const init = async () => {
    try {
      // const { props } = await getServerData<ImageItem[]>()
      // setImageList(props!)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const onClick = (row?: ImageItem) => {
    const body = document.querySelector('body')
    if (row) {
      body && body.setAttribute('style', `overflow: hidden;`)
      setSelected(row)
      setMove(false)
    } else {
      body && body.setAttribute('style', `overflow: overlay;`)
      setSelected(null)
      setTimeout(() => {
        setMove(true)
      }, 500)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return <>Sunset</>
}

export default Sunset

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO title="夕阳" description="Sunset & 夕阳 & 日落" pathName={location.pathname} />
    </>
  )
}
