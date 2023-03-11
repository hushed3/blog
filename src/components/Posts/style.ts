import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GlobalSection } from '../../styles/components/global'

export const PostSection = styled(GlobalSection)``

export const PostLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 1rem;
  padding: 0.3rem 0;
  margin: 1.6rem 0;
  color: ${(props) => props.theme.color6};
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.color1};
    time {
      color: ${(props) => props.theme.color1};
    }
  }

  h5 {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 500;
    font-family: ${(props) => props.theme.fontFamilyBase};
    line-height: 1.3;
    color: inherit;

    @media screen and (min-width: 700px) {
      font-size: 0.95rem;
      font-weight: 600;
    }
  }

  time {
    display: block;
    margin-left: auto;
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    color: ${(props) => props.theme.color8};
    font-size: 0.8rem;
    font-weight: 500;
  }
`

export const PostYear = styled.h2`
  color: rgb(${(props) => props.theme.purple6});
  padding-bottom: 0.8rem;
  border-bottom-width: 2px;
  font-size: 1.3rem;
  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
`
