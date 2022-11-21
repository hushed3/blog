import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { GlobalCard } from '../../styles/components/global'

export const SideSticky = styled.div`
  position: sticky;
  top: ${(props: any) => props.top ?? 8}rem;
`

export const SideCard = styled(GlobalCard)`
  margin: 2rem 0;
`

export const SideTitle = styled.h2`
  color: rgb(${(props) => props.theme.gray8});
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
  color: rgb(${(props) => props.theme.gray9});
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  padding: 0.1rem 0.3rem;

  &:last-child {
    margin-bottom: 0rem;
  }

  &.active {
    color: rgb(${(props) => props.theme.purple6});
    div {
      color: inherit;
    }
  }

  &:hover {
    color: rgb(${(props) => props.theme.purple6});
    text-decoration: none;
    div {
      color: inherit;
    }
  }
`

export const SlidLinkCount = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  color: rgb(${(props) => props.theme.gray8});
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
  border: 1px solid rgb(${(props) => props.theme.gray3});
  border-radius: ${(props) => props.theme.borderRadius};
  color: rgb(${(props) => props.theme.gray9});
  text-decoration: none;
  text-transform: capitalize;
  display: inline-block;
  text-align: center;

  &.active {
    color: rgb(${(props) => props.theme.purple6});
    border-color: rgba(${(props) => props.theme.purple6}, 0.3);
    background-color: rgba(${(props) => props.theme.purple5}, 0.1);
  }

  &:hover {
    color: rgb(${(props) => props.theme.purple6});
    border-color: rgba(${(props) => props.theme.purple6}, 0.3);
    background-color: rgba(${(props) => props.theme.purple5}, 0.1);
    text-decoration: none;
  }
`

export const PostSideTag = styled(SideTag)`
  &:hover {
    color: rgb(${(props) => props.theme.purple6});
    border-color: rgba(${(props) => props.theme.purple6}, 0.3);
    background-color: rgba(${(props) => props.theme.purple5}, 0.1);
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
  color: rgb(${(props) => props.theme.purple5});
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`
