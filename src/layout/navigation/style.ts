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

export const NavRouter = styled.div`
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

export const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(${(props) => props.theme.gray10});
  padding: 0;
  border: none;
  border-radius: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  margin: 0 0.5rem;

  &.about-me,
  &.writing,
  &.git-hub {
    &:hover {
      border-bottom-color: rgb(${(props) => props.theme.purple6});
    }
    &.active {
      border-bottom-color: rgb(${(props) => props.theme.purple6});
    }
  }

  &.sunset {
    &:hover {
      border-bottom-color: rgb(${(props) => props.theme.gold6});
    }
    &.active {
      border-bottom-color: rgb(${(props) => props.theme.gold6});
    }
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
      border-bottom-color: rgb(${(props) => props.theme.magenta6});
    }
  }

  &.git-hub {
    display: none !important;
    @media screen and (min-width: 700px) {
      display: flex !important;
    }
  }
`

export const NavA = NavLink.withComponent('a')

export const ThemeToggle = styled.div`
  align-self: center;
  transition: all 0.3s;
  button {
    padding: 0.9rem;
    background: transparent;
    border: none;
    border-radius: 50%;

    &:hover {
      background: rgb(${(props) => props.theme.gray3});
    }
  }
`
