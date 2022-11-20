import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GlobalCard, GlobalContainer, GlobalSection } from './global'
import { TemplateContent, TemplateGrid } from './templates'

export const BlogGrid = styled(TemplateGrid)``

export const BlogContent = styled(TemplateContent)``

export const IndexSection = styled(GlobalSection)``

// index
export const BriefWrapper = styled.div`
  display: block;

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`

export const BriefDescription = styled.p`
  -webkit-font-smoothing: antialiased;
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 1.1rem;
  line-height: 1.4;
  color: ${(props) => props.theme.fontColorBase};
  font-weight: 500;
`

const Preview = styled.div`
  display: grid;
  gap: 1.9rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  @media screen and (min-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const RecentPreview = styled(Preview)``

export const RecentCard = styled(GlobalCard)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  min-height: 10rem;

  time {
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    color: rgb(${(props) => props.theme.magenta6});
    font-size: 0.8rem;
  }
`

export const HighlightPreview = styled(Preview)``

export const HighlightCard = styled(GlobalCard)`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  min-height: 9rem;
  gap: 1rem;

  time {
    display: block;
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    color: rgb(${(props) => props.theme.magenta6});
    font-size: 0.8rem;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    height: 100%;
  }
`

export const TitleLink = styled(Link)`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.2;
  font-family: ${(props) => props.theme.fontFamilyBase};
  color: ${(props) => props.theme.fontColorHeading};
  font-weight: 700;
  padding: 0;
  border: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.fontColorBright};
  }
`

export const TagLinks = styled.div`
  display: flex;
  align-items: flex-end;

  a {
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    font-size: 0.8rem;
    color: ${(props) => props.theme.fontColorMuted};
    text-decoration: underline;
  }
`

// Sunset
export const SunsetContainer = styled(GlobalContainer)`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;

  @media screen and (max-width: 1000px) {
    padding-top: 2rem;
    gap: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding-top: 1rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }
`
