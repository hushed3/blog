import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { GlobalContainer } from '../../components/global'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  height: ${(props) => props.theme.navbarHeightLarge};

  &::after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: calc(100vw - 48px);
    height: 10px;
    z-index: -1;
    margin: auto;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: rgb(${(props) => props.theme.gray3}, 0.15) 0px 6px 8px 0px;
  }
`

export const HeaderContainer = styled(GlobalContainer)`
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colorText2};
  height: 100%;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    height: ${(props) => props.theme.navbarHeightSmall};
  }
`

export const HeaderLeft = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    gap: 0.25rem;
  }
`

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin: 0 0.4rem;

  &.J {
    line-height: 1.2;
    font-size: 1.4rem;
    font-weight: normal;
    span {
      color: inherit;
    }
  }

  &:hover {
    color: ${(props) => props.theme.colorText0};
  }

  .label {
    display: block;
  }
  .icon {
    display: none;
    font-size: 1rem;
  }

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    margin: 0 0.6rem;
    .label {
      display: none;
    }
    .icon {
      display: block;
    }
  }
`

export const HeaderImage = styled.img`
  display: block;
  height: 20px;
  width: 20px;
  min-height: 20px;
  min-width: 20px;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    display: none;
  }
`

export const HeaderA = HeaderLink.withComponent('a')

export const ThemeToggle = styled.div`
  align-self: center;
  transition: all 0.3s;
  button {
    padding: 0.2rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: inherit;
  }
`
