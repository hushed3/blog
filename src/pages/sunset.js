import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { LayoutGroup, AnimatePresence } from 'framer-motion'

import { getImages } from '../api/images'

import config from '../utils/config'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import CardImage from '../components/CardImage'
import PreviewImage from '../components/PreviewImage'

export default function Sunset() {
  const title = '夕阳'
  const description = 'Sunset & 夕阳 & 日落'
  const [imageList, setImageList] = useState([])
  const [selected, setSelected] = useState(null)

  const init = async () => {
    try {
      const { data } = await getImages()
      setImageList(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  const onHandleClick = (row) => {
    const body = document.querySelector('body')
    if (row) {
      body.style.cssText = `overflow: hidden;`
      setSelected(row)
    } else {
      body.style.cssText = `overflow: overlay;`
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

        <div className="container images">
          {imageList?.map((item) => {
            return <CardImage key={item.id} row={item} onHandleClick={onHandleClick}></CardImage>
          })}
        </div>

        <AnimatePresence>
          {selected && <PreviewImage {...selected} onHandleClick={onHandleClick}></PreviewImage>}
        </AnimatePresence>
      </LayoutGroup>
    </>
  )
}

Sunset.Layout = Layout
