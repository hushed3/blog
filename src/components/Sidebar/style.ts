import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const SideSticky = styled.div.attrs((props: { top: number }) => ({
  top: `${props.top || 8}rem`,
}))`
  position: sticky;
  top: ${(props) => props.top};
`

export const SideCard = styled.div`
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 1.25rem;
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 2rem 0;
`

export const SideTitle = styled.h2`
  color: ${(props) => props.theme.fontColorMuted};
  font-size: 0.9rem;
  border: none;
  margin: 0 0 1rem !important;
  text-transform: uppercase;
  font-weight: 700;
`

export const SideLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-color: transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.fontColorBase};
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  padding: 0.1rem 0.3rem;

  &:last-child {
    margin-bottom: 0rem;
  }

  &.active {
    background: ${(props) => props.theme.highlightColor};
    color: white;
    div {
      color: white;
    }
  }

  &:hover {
    background: ${(props) => props.theme.highlightColor};
    color: white;
    text-decoration: none;
    div {
      color: white;
    }
  }
`

export const SlidLinkCount = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${(props) => props.theme.fontColorMuted};
  font-family: ${(props) => props.theme.fontFamilyMonospace};
`

export const SideTags = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem 0.6rem;
`

export const SideTag = styled(Link)`
  line-height: 22px;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0rem 0.5rem 0.05rem 0.5rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.fontColorBase};
  background: ${(props) => props.theme.buttonBackgroundColor} !important;
  text-decoration: none;
  text-transform: capitalize;
  display: inline-block;
  text-align: center;

  &.active {
    background: ${(props) => props.theme.highlightColor} !important;
    border-color: ${(props) => props.theme.highlightColor} !important;
    color: white !important;
    font-weight: 600;
  }

  &:hover {
    color: ${(props) => props.theme.fontColorBright};
    border-color: ${(props) => props.theme.borderColorHover};
    text-decoration: none;
  }
`

export const PostSideImage = styled(Img)`
  margin: 0 auto;
  margin-top: 2rem;
  text-align: center;
  display: block !important;
`
