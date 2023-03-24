import React from 'react'

import { FooterA, FooterContainer, FooterImg, FooterSpan, FooterWrapper } from './style'
import gatsby from '/src/assets/image/gatsby.png'
import github from '/src/assets/image/github.png'

type Links = {
  url: string
  label: string
  icon?: string
}

const links: Links[] = []
const madeWithLinks: Links[] = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/hushed3', label: 'GitHub', icon: github },
]

export const Footer = () => {
  const year = new Date().getFullYear() === 2022 ? '' : `- ${new Date().getFullYear()}`

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSpan className="desktop-only">© 2022 {year} By Hush</FooterSpan>
        {links.map((link) => (
          <FooterA href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
            {link.label}
          </FooterA>
        ))}
      </FooterWrapper>
      <FooterWrapper>
        {madeWithLinks.map((link) => (
          <FooterA href={link.url} title={link.label} target="_blank" rel="noopener noreferrer" key={link.url}>
            <FooterSpan>{link.label}</FooterSpan>
            <FooterImg src={link.icon} alt={link.label} />
          </FooterA>
        ))}
      </FooterWrapper>

      <FooterWrapper>
        <FooterA href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
          蜀ICP备2022009836号
        </FooterA>
      </FooterWrapper>
    </FooterContainer>
  )
}
