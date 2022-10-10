import React from 'react'

import gatsby from '/src/assets/gatsby.png'
import github from '/src/assets/nav-github.png'

const links = [
  // { url: 'https://taniarascia.substack.com/subscribe', label: 'Newsletter' },
  // { url: 'https://ko-fi.com/taniarascia', label: 'Ko-Fi' },
  // { url: 'https://patreon.com/taniarascia', label: 'Patreon' },
  // { url: 'https://www.taniarascia.com/rss.xml', label: 'RSS' },
]
const madeWithLinks = [
  // { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/hushed3', label: 'GitHub', icon: github },
]

export const Footer = () => {
  const year = new Date().getFullYear() === 2022 ? '' : `- ${new Date().getFullYear()}`
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">© 2022 {year} By Hush</span>
          {links.map((link) => (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
              {link.label}
            </a>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a href={link.url} title={link.label} target="_blank" rel="noopener noreferrer" key={link.url}>
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>

        <nav>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            蜀ICP备2022009836号
          </a>
        </nav>
      </section>
    </footer>
  )
}
