import { Link } from 'gatsby'
import styled from 'styled-components'

import { GlobalContainer } from '../../styles/components/global'

export const NavSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background: ${(props) => props.theme.navbar};
  height: ${(props) => props.theme.navbarHeightSmall};
  backdrop-filter: blur(8px);

  @media screen and (min-width: 850px) {
    height: ${(props) => props.theme.navbarHeightLarge};
  }
`

export const NavContainer = styled(GlobalContainer)`
  display: flex;
  justify-content: space-between;
  height: ${(props) => props.theme.navbarHeightSmall};

  .logo {
    height: 22px;
    width: 22px;
    min-height: 22px;
    min-width: 22px;
  }

  @media screen and (min-width: 850px) {
    height: ${(props) => props.theme.navbarHeightLarge};

    .logo {
      display: none;
      margin-right: 0;
    }
  }
`

export const NavLeft = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  @media screen and (min-width: 850px) {
    gap: 1.5rem;
  }
`

export const NavRouter = styled.div.attrs((props) => ({
  key: props.key,
}))`
  display: flex;
  align-items: center;
`

export const NavImage = styled.img`
  display: none;
  height: 20px;
  width: 20px;
  min-height: 20px;
  min-width: 20px;

  @media screen and (min-width: 850px) {
    display: block;
  }
`

export const NavLink = styled(Link).attrs((props) => {
  const colorList: { key: string; value: string }[] = [
    { key: 'git-hub', value: 'var(--rainbow-2);' },
    { key: 'about-me', value: 'var(--rainbow-3);' },
    { key: 'writing', value: 'var(--rainbow-4);' },
    { key: 'sunset', value: 'var(--rainbow-5);' },
  ]
  const color = colorList.find((item) => props.className && props.className.includes(item.key))?.value
  return {
    color,
  }
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.navbarColor};
  padding: 0;
  border: none;
  border-radius: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  margin: 0 0.5rem;

  &:hover {
    border-bottom-color: ${(props) => props.color};
  }
  &.active {
    border-bottom-color: ${(props) => props.color};
  }

  &.brand {
    line-height: 1.2;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0.5rem 0 0.25rem;

    @media screen and (min-width: 850px) {
      font-size: 1.2rem;
    }
    &:hover {
      border-bottom-color: var(--rainbow-1);
    }
  }

  &.git-hub {
    display: none !important;
    @media screen and (min-width: 700px) {
      display: flex !important;
    }
  }
`

export const ThemeToggle = styled.div`
  align-self: center;
  button {
    padding: 0.7rem;
    background: ${(props) => props.theme.themeButtonBackground};

    border-color: ${(props) => props.theme.themeButtonBorder};
    color: ${(props) => props.theme.themeButtonColor};

    &:hover {
      background: ${(props) => props.theme.themeButtonBackgroundHover};
      border-color: ${(props) => props.theme.themeButtonBorderHover};
      color: ${(props) => props.theme.themeButtonColorHover};
    }
  }
`
