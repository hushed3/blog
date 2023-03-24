import styled from '@emotion/styled'

export const BriefSection = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 1.5rem 0;
  margin-top: 1.8rem;
  position: relative;
`

export const BriefSubTitle = styled.div`
  color: ${(props) => props.theme.colorText3};
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.4rem;
`

export const BriefTitle = styled.h1`
  line-height: 1.1;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -0.08rem;
  margin: 0 !important;

  @media screen and (max-width: ${(props) => props.theme.contentWidthMedium}) {
    font-size: 1.35rem;
    letter-spacing: -0.06rem;
  }
`

export const BriefPurpleTitle = styled.span`
  color: rgb(${(props) => props.theme.primary4});
`
