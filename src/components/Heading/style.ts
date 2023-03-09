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
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  font-family: ${(props) => props.theme.fontFamilyBase};
  font-weight: 700;
  letter-spacing: -0.03rem;
  @media screen and (min-width: 850px) {
    font-size: 1.4rem;
  }
`

export const ViewAllLink = styled(Link)`
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.9rem;
  font-family: ${(props) => props.theme.fontFamilyBase};
  line-height: 1;
  border-radius: ${(props) => props.theme.borderRadiusMedium};
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.color6};
  border: 1px solid rgb(${(props) => props.theme.gray3});
  gap: 0.25rem;

  &:hover {
    color: ${(props) => props.theme.color3};
    border-color: rgb(${(props) => props.theme.gray4});
  }
`
