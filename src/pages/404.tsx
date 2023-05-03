import React from 'react'
import { Result } from 'antd'

import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { useStyles } from '../styles/pages/404.style'
import NotFoundSvg from '../assets/svg/notFound.svg'

export default function FourOhFour() {
  const { styles } = useStyles()

  return (
    <>
      <SEO helmetTitle="404" />
      <div className={styles.container}>
        <Result icon={<NotFoundSvg />} subTitle="Not found.." />
      </div>
    </>
  )
}

FourOhFour.Layout = Layout
