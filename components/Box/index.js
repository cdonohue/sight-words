import { css } from "@emotion/core"
import styled from '@emotion/styled'

const boxStyles = css`
  padding: var(--metric-space);
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
`

export const Container = styled.div`
  ${boxStyles};
  padding-left: 0;
  padding-right: 0;
  max-width: 57ch;
`

export default styled.div`
  ${boxStyles};
`
