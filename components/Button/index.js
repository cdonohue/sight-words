import { css } from "@emotion/core"
import styled from '@emotion/styled'

export const buttonStyles = css`
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: inherit;
  /* line-height: 2.4rem; */
  letter-spacing: 0.012em;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  appearance: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: var(--metric-radius);
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  }
`

export default styled.button`
  ${buttonStyles};
`
