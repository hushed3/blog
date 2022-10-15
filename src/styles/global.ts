import styled from 'styled-components'

export const GlobalContainer = styled.div`
  max-width: ${(props) => props.theme.contentWidth};
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 700px) {
    .container {
      padding: 0 1.5rem;
    }
  }
`

export const GlobalCard = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 1rem;
  position: relative;
  @media screen and (min-width: 700px) {
    padding: 1.2rem;
  }
`
