import { Link } from 'gatsby'
import styled from 'styled-components'
import { GlobalCard } from '../../styles/global'

export const HeroWrapper = styled.div`
  display: block;

  @media screen and (min-width: 700px) {
    .hero-wrapper {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
  }
`

export const Description = styled.p`
  -webkit-font-smoothing: antialiased;
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 1.1rem;
  line-height: 1.4;
  color: ${(props) => props.theme.fontColorBase};
  font-weight: 500;
`

export const Section = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 700px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`

export const PostPreview = styled.div`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`

export const PostCard = styled(GlobalCard)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  min-height: 9rem;
`

export const TitleLink = styled(Link)`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.2;
  font-family: ${(props) => props.theme.fontFamilyBase};
  color: ${(props) => props.theme.fontColorHeading};
  font-weight: 700;
  margin: 0.25rem 0 0.5rem;
  padding: 0;
  border: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: var(--font-color-bright);
  }
`

export const Time = styled.time.attrs((props: { type: string }) => ({ type: props.type || 'popular' }))`
  display: block;
  font-family: ${(props) => props.theme.fontFamilyMonospace};
  color: ${(props) => props.theme[props.type === 'post' ? 'cardTimeColor' : 'fontColorBright']};
  font-size: 0.8rem;
`

export const TagLinks = styled.div`
  display: flex;
  align-items: flex-end;
`

export const TagLink = styled(Link)`
  font-family: ${(props) => props.theme.fontFamilyMonospace};
  font-size: 0.8rem;
  color: ${(props) => props.theme.fontColorMuted};
  text-decoration: underline;
`

export const PopularPreview = styled.div`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media screen and (min-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const PopularCard = styled(GlobalCard)`
  background: transparent;
  padding: 1.5rem;
  border: 2px solid ${(props) => props.theme.borderColor};
  display: flex;
  align-items: center;
  gap: 1rem;
`
