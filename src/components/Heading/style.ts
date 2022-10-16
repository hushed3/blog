import { Link } from 'gatsby'
import styled from 'styled-components'

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
  background: ${(props) => props.theme.buttonBackgroundColor};
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1rem;
  font-family: ${(props) => props.theme.fontFamilyBase};
  line-height: 1;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.fontColorBase};
  border: 1px solid ${(props) => props.theme.borderColor};
  gap: 0.25rem;

  &:hover {
    color: ${(props) => props.theme.fontColorBright};
    border-color: ${(props) => props.theme.borderColorHover};
  }
`
