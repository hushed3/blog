import styled from '@emotion/styled'
import { GlobalContainer, GlobalWrapper } from '../components/global'

export const TemplateTitle = styled.h1`
  padding: 2.5rem 0 1rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.85rem;
  letter-spacing: -0.07rem;
  font-weight: 700;
  line-height: 1.05;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    padding: 1.5rem 0 2rem;
    font-size: 1.5rem;
  }
`

export const TemplateContainer = styled(GlobalContainer)`
  display: grid;
  grid-template-columns: auto 260px;
  gap: 4rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    display: block;
  }
`

export const TemplateArticle = styled.article`
  max-width: 100%;
  min-width: 0;
`

export const TemplateWrapper = styled(GlobalWrapper)``
