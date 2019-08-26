import styled from '@emotion/styled'
import Link from "next/link"

import Card from "../components/Card"
import Box from "../components/Box"
import { Chrome } from "react-feather"

const Disclaimer = styled.div`
  background: #f4f6fa;
  padding: var(--metric-space);
  border-radius: 4px;
  text-shadow: none;
  font-size: 0.875rem;
  color: #424b61;

  p {
    margin: 0;
  }
`

export default function() {
  return (
    <>
      <h1>Sight Words</h1>
      <hr />
      <Card>
        <Box>
          <p>
            This app was made to both help my daughter learn her{" "}
            <a target="_blank" href="https://en.wikipedia.org/wiki/Sight_word">
              sight words
            </a>{" "}
            and also as an opportunity to show my kids a little bit about what I
            do everyday as a developer/designer.
          </p>

          <p>
            You can{" "}
            <Link preload href="/listen">
              <a>Listen</a>
            </Link>{" "}
            to any of the sight words or{" "}
            <Link preload href="/speak">
              <a>Say</a>
            </Link>{" "}
            a randomly chosen word.
          </p>

          <p>
            Right now, this is geared towards kindergarten sight words so
            individual mileage may vary. I might add some more difficult words
            and maybe a grade selection at a later time.
          </p>

          <p>Enjoy!</p>

          <Disclaimer>
            <p>
              You will have fewer bumps in the experience if you use Google
              Chrome, since that supports speech from a microphone. With that
              being said, you'll need sound (speakers or headphones) and a
              microphone to speak into. Keep in mind that there might be a few
              bugs in the speech recognition and voice synthesis as we work on
              making this experience better.
            </p>
          </Disclaimer>
        </Box>
      </Card>
      <br />
      <p>
        For those interested in how this was made, please go check out the{" "}
        <a target="_blank" href="https://www.github.com/cdonohue">
          source code
        </a>{" "}
        on GitHub.
      </p>
    </>
  )
}
