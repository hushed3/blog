import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { GlobalCard } from '../../styles/components/global'

export const SideSticky = styled.div.attrs((props: { top: number }) => ({
  top: `${props.top || 8}rem`,
}))`
  position: sticky;
  top: ${(props) => props.top};
`

export const SideCard = styled(GlobalCard)`
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
    color: ${(props) => props.theme.highlightColor};
    div {
      color: inherit;
    }
  }

  &:hover {
    color: ${(props) => props.theme.highlightColor};
    text-decoration: none;
    div {
      color: inherit;
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
  text-decoration: none;
  text-transform: capitalize;
  display: inline-block;
  text-align: center;

  &.active {
    color: ${(props) => props.theme.highlightColor};
    border-color: rgba(81, 182, 129, 0.3);
    background-color: rgba(81, 182, 129, 0.18);
  }

  &:hover {
    color: ${(props) => props.theme.highlightColor};
    border-color: rgba(81, 182, 129, 0.3);
    background-color: rgba(81, 182, 129, 0.15);
    text-decoration: none;
  }
`

export const PostSideImage = styled(GatsbyImage)`
  margin: 0 auto;
  margin-top: 2rem;
  text-align: center;
  display: block !important;
  width: 100px;
`

export const Anchor = styled.li`
  margin-bottom: 0.65rem;
  color: ${(props) => props.theme.link};
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`
