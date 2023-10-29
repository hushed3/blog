import { AnimatePresence, LayoutGroup } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import CardImage from '@/components/CardImage'
import PreviewImage from '@/components/PreviewImage'
import SEO from '@/components/SEO'

import { useStyles } from '@/styles/pages/sunset.style'
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

  return (
    <>
      <LayoutGroup>
        <div className={styles.container}>
          {imageList?.map((item, idx: number) => {
            return <CardImage move={move} key={item.id} row={{ ...item, idx }} onClick={onClick}></CardImage>
          })}
        </div>

        <AnimatePresence>{selected && <PreviewImage {...selected} onClick={onClick}></PreviewImage>}</AnimatePresence>
      </LayoutGroup>
    </>
  )
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
