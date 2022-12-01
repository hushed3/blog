import styled from '@emotion/styled'

export const GlobalContainer = styled.div`
  max-width: ${(props) => props.theme.contentWidth};
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 700px) {
    padding: 0 1.5rem;
  }
`

export const GlobalCard = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  background: ${(props) => props.theme.cardBackground};
  padding: 1rem;
  position: relative;
  box-shadow: ${(props) => props.theme.cardShadow};
  transition: all ease-out 0.1s;

  @media screen and (min-width: 700px) {
    padding: 1.25rem;
  }
`

export const GlobalSection = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  &.small {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &.large {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 700px) {
    margin-top: 3rem;
    margin-bottom: 3rem;

    &.small {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`
