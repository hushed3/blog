import React from 'react'
import { navigate } from 'gatsby'
import { Button } from 'antd'

import { SEO } from '@/components/SEO'
import { Layout } from '@/layout/index'
import { useStyles } from '@/styles/pages/404.style'

export default function FourOhFour() {
  const { styles } = useStyles()

  const ToHome = () => {
    navigate('/')
  }

  return (
    <>
      <SEO helmetTitle="404" />
      <div className={styles.container}>
        <div className={styles[404]}>404</div>
        <Button type="text" onClick={ToHome}>
          Back to home page
        </Button>
      </div>
    </>
  )
}

FourOhFour.Layout = Layout
