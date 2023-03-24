import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GlobalWrapper } from '../global'

export const PostWrapper = styled(GlobalWrapper)``

export const PostLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 1rem;
  padding: 0.3rem 0;
  margin: 1.6rem 0;
  color: ${(props) => props.theme.colorText1};
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.colorText0};
    time {
      color: ${(props) => props.theme.colorText0};
    }
  }

  h5 {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: ${(props) => props.theme.fontFamilyBase};
    line-height: 1.3;
    color: inherit;

    @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
      font-size: 0.85rem;
      font-weight: 500;
    }
  }

  time {
    display: block;
    margin-left: auto;
    font-family: ${(props) => props.theme.fontFamilyMonospace};
    color: ${(props) => props.theme.colorText3};
    font-size: 0.8rem;
    font-weight: 500;
  }
`

export const PostYear = styled.h2`
  color: rgb(${(props) => props.theme.primary4});
  padding-bottom: 0.8rem;
  border-bottom: 2px solid ${(props) => props.theme.colorBorder0};
  font-size: 1.6rem;
  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 1.4rem;
  }
`
