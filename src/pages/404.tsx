import { Result } from 'antd'
import React from 'react'

import NotFoundSvg from '@/assets/svg/notFound.svg'
import { SEO } from '@/components/SEO'
import { Layout } from '@/layout/index'
import { useStyles } from '@/styles/pages/404.style'

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
