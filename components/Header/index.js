import styled from '@emotion/styled'
import Link from "./Link"

import { Headphones, MessageCircle } from "react-feather"

const Wrapper = styled.header`
  background: #6580be;
  color: #cdd5ea;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.26);
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 57ch)
    minmax(1.2rem, 1fr);

  header {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
  }
`

const Links = styled.div`
  display: flex;
  > * {
    padding: 0;
    color: white;
    text-decoration: none;
  }

  > * + * {
    margin-left: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    padding: var(--metric-space) 0;
    transition: 0.2s ease;
    position: relative;

    &.nav-link::after {
      content: "";
      bottom: 0;
      left: 0.2rem;
      display: block;
      width: 100%;
      position: absolute;
      background: rgba(255, 255, 255, 0.54);
      transition: 0.2s ease-in-out;
      opacity: 0;
      height: 2px;
      border-radius: 2px 2px 0 0;
    }

    &:hover {
      color: white;
      &.nav-link::after {
        opacity: 0.5;
      }
    }

    &.nav-link.active {
      &::after {
        opacity: 1;
        height: 4px;
      }
    }

    svg {
      color: #b3c1df;
      width: 18px;
      margin-right: 0.5rem;
    }
  }
`

export default function(props) {
  return (
    <Wrapper>
      <header>
        <Links>
          <Link activeClassName="active" prefetch href="/">
            <a>Sight Words</a>
          </Link>
        </Links>
        <Links>
          <Link activeClassName="active" prefetch href="/listen">
            <a className="nav-link">
              <Headphones />
              Listen
            </a>
          </Link>
          <Link activeClassName="active" prefetch href="/speak">
            <a className="nav-link">
              <MessageCircle />
              Say
            </a>
          </Link>
        </Links>
      </header>
    </Wrapper>
  )
}
