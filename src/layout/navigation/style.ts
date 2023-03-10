import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { GlobalContainer } from '../../styles/components/global'

export const NavSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background: rgba(0, 0, 0, 0);
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
  color: ${(props) => props.theme.color6};

  @media screen and (min-width: 850px) {
    height: ${(props) => props.theme.navbarHeightLarge};
  }
`

export const NavLeft = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  @media screen and (min-width: 850px) {
    gap: 0.75rem;
  }
`

export const NavRouter = styled.div`
  display: flex;
  align-items: center;
  .icon {
    display: block;
  }
  .label {
    display: none;
  }

  @media screen and (min-width: 850px) {
    .label {
      display: block;
    }
    .icon {
      display: none;
    }
  }
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

export const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: inherit;
  padding: 0;
  border: none;
  border-radius: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  margin: 0 0.6rem;

  @media screen and (min-width: 850px) {
    margin: 0 0.4rem;
  }

  &.J {
    line-height: 1.2;
    font-size: 1.4rem;
    font-weight: normal;
    span {
      color: inherit;
    }
  }

  &:hover {
    color: ${(props) => props.theme.color1};
  }
`

export const NavA = NavLink.withComponent('a')

export const ThemeToggle = styled.div`
  align-self: center;
  transition: all 0.3s;
  button {
    padding: 0.2rem;
    background: transparent;
    border: none;
    border-radius: 50%;
    color: inherit;
  }
`
