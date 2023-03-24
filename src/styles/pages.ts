import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GlobalCard, GlobalContainer, GlobalWrapper } from '../components/global'
import { TemplateArticle, TemplateContainer } from './templates'

export const BlogContainer = styled(TemplateContainer)``

export const BlogArticle = styled(TemplateArticle)``

export const IndexWrapper = styled(GlobalWrapper)`
  margin-top: 2rem;
`

// index
export const BriefWrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    display: block;
    align-items: center;
    gap: 3rem;
  }
`

export const BriefDescription = styled.p`
  -webkit-font-smoothing: antialiased;
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 0.95rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colorText1};

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 0.85rem;
    margin-top: 2rem;
  }
`

const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.9rem;
  }

  @media screen and (max-width: ${(props) => props.theme.contentWidthSmall}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.4rem;
  }
`

export const RecentPreview = styled(Preview)``

export const RecentCard = styled(GlobalCard)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  min-height: 9rem;
`

export const HighlightPreview = styled(Preview)``

export const HighlightCard = styled(GlobalCard)`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  min-height: 9rem;
  gap: 1rem;

  .content {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    height: 100%;
  }
`

export const CardTime = styled.time`
  display: block;
  font-family: ${(props) => props.theme.fontFamilyMonospace};
  color: rgba(${(props) => props.theme.magenta5}, 0.95);
  font-size: 0.75rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 0.7rem;
  }
`

export const CardTitleLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.98rem;
  line-height: 1.2;
  font-family: ${(props) => props.theme.fontFamilyBase};
  color: ${(props) => props.theme.colorText1};
  font-weight: 600;
  padding: 0;
  border: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colorText0};
  }

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 0.88rem;
  }
`

export const CardTagLinks = styled.div`
  display: flex;
  align-items: flex-end;

  a {
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    font-size: 0.75rem;
    color: ${(props) => props.theme.colorText2};
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.colorText0};
    }

    @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
      font-size: 0.7rem;
    }
  }
`

// Sunset
export const SunsetContainer = styled(GlobalContainer)`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidth}) {
    padding-top: 2rem;
    gap: 1.5rem;
  }
  @media screen and (max-width: ${(props) => props.theme.contentWidthSmall}) {
    padding-top: 1rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }
`
