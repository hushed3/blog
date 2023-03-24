import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const GlobalContainer = styled.div`
  max-width: ${(props) => props.theme.contentWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    padding: 0 1.3rem;
  }
`

export const GlobalWrapper = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 3rem;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

export const GlobalArticle = styled.article`
  max-width: 100%;
  min-width: 0;
`

export const GlobalCard = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  background-color: rgb(${(props) => props.theme.cardBackground});
  padding: 1.25rem;
  position: relative;
  box-shadow: ${(props) => props.theme.cardShadow};
  transition: all ease-out 0.1s;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    padding: 1rem;
  }
`

export const TagLink = styled(Link)`
  min-height: 24px;
  line-height: 1.75;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.1rem 0.6rem;
  border: 1px solid ${(props) => props.theme.colorBorder0};
  border-radius: ${(props) => props.theme.borderRadiusMedium};
  color: ${(props) => props.theme.colorText1};

  text-decoration: none;
  text-transform: capitalize;
  display: inline-block;
  text-align: center;

  &.active {
    color: rgb(${(props) => props.theme.primary5});
    border-color: rgba(${(props) => props.theme.primary5}, 0.4);
    background-color: rgba(${(props) => props.theme.primary4}, 0.1);
  }

  &:hover {
    color: rgba(${(props) => props.theme.primary5}, 1);
    border-color: rgba(${(props) => props.theme.primary5}, 0.3);
    background-color: rgba(${(props) => props.theme.primary4}, 0.1);
  }
`
