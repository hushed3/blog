import React from 'react'

import { BgParticles } from '../components/BgParticles'
import { Footer } from './footer/index'
import { Header } from './header/index'

import styled from '@emotion/styled'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <BgParticles />
    </LayoutContainer>
  )
}
