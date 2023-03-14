import styled from '@emotion/styled'

export const FooterContainer = styled.footer`
  padding: 3rem 0;
  font-family: ${(props) => props.theme.fontFamilyBase};
`

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

export const FooterNav = styled.nav`
  display: flex;
  color: ${(props) => props.theme.colorText3};
  gap: 0.25rem;
  margin: 0 1rem;
`

export const FooterSpan = styled.span`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 0.85rem;
  line-height: 1.2;
  padding: 0 0.5rem;
`

export const FooterA = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 0.85rem;
  line-height: 1.2;
  padding: 0 0.5rem;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colorText1};
  }
`

export const FooterImg = styled.img`
  display: inline-block;
  max-height: 20px;
  width: auto;
`
