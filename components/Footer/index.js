import styled from "@emotion/styled"
import { Container } from "../Box"
import { Twitter, GitHub } from "react-feather"

const Wrapper = styled.footer`
  background: #f2f4f8;
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.03);
  color: #b7bfd2;
  text-shadow: initial;

  ${Container} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Copyright = styled.div``

const SocialLinks = styled.div`
  display: flex;
  > * {
    margin-left: var(--metric-space);
    text-decoration: none;
  }
`

const SocialLink = styled.a`
  color: rgba(0, 0, 0, 0.2);
  transition: 0.2s var(--metric-transition-bezier);
  display: flex;
  align-items: center;
  color: #b7bfd2;

  svg {
    width: 18px;
  }

  &:hover {
    transform: translateY(-1px);
    color: ${(props) => props.hoverColor};
  }
`

export default function(props) {
  return (
    <Wrapper>
      <Container>
        <Copyright>© 2018 Chad Donohue</Copyright>
        <SocialLinks>
          <SocialLink
            hoverColor="#1da1f2"
            href="https://twitter.com/chaddonohue"
          >
            <Twitter />
          </SocialLink>
          <SocialLink hoverColor="#333" href="https://github.com/cdonohue">
            <GitHub />
          </SocialLink>
        </SocialLinks>
      </Container>
    </Wrapper>
  )
}
