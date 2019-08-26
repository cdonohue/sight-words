import styled from "react-emotion"

export default styled.div`
  width: 100%;
  margin-left: auto;
  overflow: hidden;
  margin-right: auto;
  background: var(--color-white);
  max-width: 100%;
  border-radius: var(--metric-radius);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  transition: 0.2s var(--metric-transition-bezier);
`

export const CardFooter = styled.div`
  padding: 1rem;
  background: #f2f4f8;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  grid-gap: var(--metric-space);
`
