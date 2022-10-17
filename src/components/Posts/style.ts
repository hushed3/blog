import { Link } from 'gatsby'
import styled from 'styled-components'
import { GlobalSection } from '../../styles/components/global'

export const PostSection = styled(GlobalSection)``

export const PostLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 1.5rem;
  padding: 0;
  margin: 1.6rem 0;
  background: transparent;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.fontColorBright};
    text-decoration: underline;
  }
`

export const PostTime = styled.time`
  display: block;
  margin-left: auto;
  font-family: ${(props) => props.theme.fontFamilyMonospace};
  color: ${(props) => props.theme.postTimeColor};
  font-size: 0.8rem;
  font-weight: 500;
`
export const PostH5 = styled.h5`
  margin: 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.fontColorHeading};
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamilyBase};
  line-height: 1.3;

  @media screen and (min-width: 700px) {
    font-size: 1rem;
    font-weight: 600;
  }
`

export const PostYear = styled.h2`
  color: ${(props) => props.theme.year};
  padding-bottom: 0.8rem;
`
