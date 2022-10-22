import { AnimatePresence, LayoutGroup } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'

import CardImage from '../components/CardImage'
import PreviewImage from '../components/PreviewImage'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { SunsetContainer } from '../styles/components/pages'
import config from '../utils/config'

import { getServerData } from '../data/index'

export default function Sunset() {
  const title = '夕阳'
  const description = 'Sunset & 夕阳 & 日落'
  const [imageList, setImageList] = useState<ImageItem[]>([])
  const [selected, setSelected] = useState<ImageItem | null>(null)

  const init = async () => {
    try {
      const { props } = await getServerData<ImageItem[]>()
      setImageList(props!)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const onHandleClick = (row?: ImageItem) => {
    const body = document.querySelector('body')
    if (row) {
      body && body.setAttribute('style', `overflow: hidden;`)
      setSelected(row)
    } else {
      body && body.setAttribute('style', `overflow: overlay;`)
      setSelected(null)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <LayoutGroup>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO customDescription={description} />

        <SunsetContainer>
          {imageList?.map((item) => {
            return <CardImage key={item.id} row={item} onHandleClick={onHandleClick}></CardImage>
          })}
        </SunsetContainer>

        <AnimatePresence>
          {selected && <PreviewImage {...selected} onHandleClick={onHandleClick}></PreviewImage>}
        </AnimatePresence>
      </LayoutGroup>
    </>
  )
}

Sunset.Layout = Layout
