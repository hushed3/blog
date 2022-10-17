import React from 'react'
import { ThemeProviderWrapper } from '../context/ThemeContext'

import { BgParticles } from '../components/BgParticles'
import { Footer } from './footer/index'
import { Navigation } from './navigation/index'

import styled from 'styled-components'

const LayoutContainer = styled.div.attrs({
  id: 'layout',
})`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main.attrs({
  id: 'main',
})`
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
        <BgParticles />
        <Navigation />
        <Main>{children}</Main>
        <Footer />
      </LayoutContainer>
    </ThemeProviderWrapper>
  )
}
