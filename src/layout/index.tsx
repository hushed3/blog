import React from 'react'

import { BgParticles } from '../components/BgParticles'
import { Footer } from './footer/index'
import { Navigation } from './navigation/index'

import styled from '@emotion/styled'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  margin-top: ${(props) => props.theme.navbarHeightLarge};
  flex: 1;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    margin-top: ${(props) => props.theme.navbarHeightSmall};
  }
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
      <BgParticles />
    </LayoutContainer>
  )
}
