import styled from 'styled-components'
import { GlobalSection } from './global'

export const TemplateGrid = styled.div`
  display: block;

  @media screen and (min-width: 1060px) {
    display: grid;
    grid-template-columns: auto 260px;
    gap: 5rem;
  }
`

export const TemplateHeader = styled.h1`
  padding: 1.5rem 0 2rem;
  margin-top: 0.25rem !important;
  margin-bottom: 0.75rem;
  font-size: 1.6rem;
  letter-spacing: -0.07rem;
  font-weight: 700;
  line-height: 1.05;
  max-width: ${(props) => props.theme.contentWidthMedium};

  @media screen and (min-width: 700px) {
    padding: 2.5rem 0 1rem;
    font-size: 2rem;
  }
`

export const TemplateContent = styled.div`
  max-width: 100%;
  min-width: 0;
`

export const TemplateSection = styled(GlobalSection)``
