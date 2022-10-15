import React from 'react'

import { A, FooterContainer, Img, Nav, Section, Span } from './style'
import github from '/src/assets/nav-github.png'

type Links = {
  url: string
  label: string
  icon?: string
}

const links: Links[] = []
const madeWithLinks: Links[] = [
  // { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/hushed3', label: 'GitHub', icon: github },
]

export const Footer = () => {
  const year = new Date().getFullYear() === 2022 ? '' : `- ${new Date().getFullYear()}`
  return (
    <FooterContainer>
      <Section>
        <Nav>
          <Span className="desktop-only">© 2022 {year} By Hush</Span>
          {links.map((link) => (
            <A href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
              {link.label}
            </A>
          ))}
        </Nav>
        <Nav>
          {madeWithLinks.map((link) => (
            <A href={link.url} title={link.label} target="_blank" rel="noopener noreferrer" key={link.url}>
              <Span>{link.label}</Span>
              <Img src={link.icon} alt={link.label} />
            </A>
          ))}
        </Nav>

        <Nav>
          <A href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            蜀ICP备2022009836号
          </A>
        </Nav>
      </Section>
    </FooterContainer>
  )
}
