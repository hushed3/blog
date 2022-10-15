import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 3rem 0;
  font-family: ${(props) => props.theme.fontFamilyBase};
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.25rem;
  margin: 0 1rem;
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  color: var(--font-color-base);
  font-size: 0.9rem;
  line-height: 1.2;
  padding: 0 0.5rem;
`

export const A = styled.a`
  display: flex;
  align-items: center;
  color: var(--font-color-base);
  font-size: 0.9rem;
  line-height: 1.2;
  padding: 0 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

export const Img = styled.img`
  display: inline-block;
  max-height: 20px;
  width: auto;
`
