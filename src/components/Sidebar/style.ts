import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { GlobalCard, TagLink } from '../global'

export const SideSticky = styled.div`
  position: sticky;
  top: calc(${(props) => props.theme.navbarHeightLarge} + 30px);

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    top: ${(props) => props.theme.navbarHeightSmall};
  }
`

export const SideCard = styled(GlobalCard)`
  margin: 2rem 0;

  li {
    font-size: 0.85rem;
    color: ${(props) => props.theme.colorText2};
  }
`

export const SideTitle = styled.h2`
  color: ${(props) => props.theme.colorText1};
  font-size: 0.9rem;
  border: none;
  margin: 0 0 1rem !important;
  text-transform: uppercase;
  font-weight: 700;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 0.8rem;
  }
`

export const SideLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-color: transparent;
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  color: ${(props) => props.theme.colorText2};
  font-size: 0.86rem;
  margin-bottom: 0.6rem;
  padding: 0.1rem 0.3rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 0.76rem;
  }

  &:last-child {
    margin-bottom: 0rem;
  }

  &.active {
    color: rgb(${(props) => props.theme.primary5});
    font-weight: bold;
    div {
      color: inherit;
    }
  }

  &:hover {
    color: rgb(${(props) => props.theme.primary5});
    text-decoration: none;
    div {
      color: inherit;
    }
  }
`

export const SideTags = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem 0.6rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0.6rem 0.4rem;
  }
  @media screen and (max-width: ${(props) => props.theme.contentWidthSmall}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.6rem 0.4rem;
  }
`

export const SideTag = styled(TagLink)``

export const PostSideTag = styled(SideTag)``

export const PostSideImage = styled(GatsbyImage)`
  margin: 0 auto;
  margin-top: 2rem;
  text-align: center;
  display: block !important;
  width: 100px;
`

export const Anchor = styled.li`
  margin-bottom: 0.65rem;
  color: rgb(${(props) => props.theme.primary5}) !important;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`
