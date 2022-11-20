import React from 'react'
import { ThemeProviderWrapper } from '../context/ThemeContext'

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
  margin-top: ${(props) => props.theme.navbarHeightSmall};
  flex: 1;

  @media screen and (min-width: 850px) {
    margin-top: ${(props) => props.theme.navbarHeightLarge};
  }
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviderWrapper>
      <LayoutContainer>
        <Navigation />
        <Main>{children}</Main>
        <Footer />
        <BgParticles />
      </LayoutContainer>
    </ThemeProviderWrapper>
  )
}
