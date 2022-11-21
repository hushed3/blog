import styled from '@emotion/styled'

export const BriefContainer = styled.header`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0.5rem 0;
  position: relative;
  @media screen and (min-width: 700px) {
    padding: 2.5rem 0 0.5rem;
    &.index {
      padding: 3rem 0 0 0;
    }
  }
`

export const BriefSubTitle = styled.div`
  color: rgb(${(props) => props.theme.gray8});
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.4rem;
`

export const BriefTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.06rem;
  color: rgb(${(props) => props.theme.gray10});
  margin: 0 !important;

  @media screen and (min-width: 700px) {
    font-size: 2rem;
    letter-spacing: -0.08rem;
  }
`

export const BriefPurpleTitle = styled.span`
  color: rgb(${(props) => props.theme.purple5});
`
