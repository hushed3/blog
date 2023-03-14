import styled from '@emotion/styled'
import { TagLink } from '../global'

export const HeadingContainer = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  padding: 0;
`

export const HeadingTitle = styled.div`
  margin-bottom: 0.75rem;
  font-family: ${(props) => props.theme.fontFamilyBase};
  font-weight: 700;
  letter-spacing: -0.03rem;
  font-size: 1.4rem;
  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 1.15rem;
  }
`

export const ViewAllLink = styled(TagLink)`
  font-size: 0.8rem;
`
