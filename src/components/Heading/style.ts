import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const HeadingContainer = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  padding: 0;
`

export const HeadingTitle = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  font-family: ${(props) => props.theme.fontFamilyBase};
  font-weight: 700;
  letter-spacing: -0.03rem;
  @media screen and (min-width: 700px) {
    font-size: 1.6rem;
  }
`

export const HeadingLink = styled(Link)`
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1rem;
  font-family: ${(props) => props.theme.fontFamilyBase};
  line-height: 1;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 500;
  color: rgb(${(props) => props.theme.gray9});
  border: 1px solid rgb(${(props) => props.theme.gray3});
  gap: 0.25rem;

  &:hover {
    color: rgb(${(props) => props.theme.gray10});
    border-color: rgb(${(props) => props.theme.gray4});
  }
`
