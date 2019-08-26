import styled from "react-emotion"
import { css } from "emotion"

import Card from "../components/Card"
import Box from "../components/Box"
import Button from "../components/Button"

const sightWords = [
  "no",
  "so",
  "go",
  "is",
  "on",
  "it",
  "can",
  "in",
  "do",
  "me",
  "up",
  "an",
  "you",
  "am",
  "the",
  "and",
  "we",
  "my",
  "he",
  "like",
  "to",
  "at",
  "see",
  "a",
  "I",
]

const CardGrid = styled.div`
  display: grid;
  grid-gap: var(--metric-space);
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`

export default class ListenPage extends React.Component {
  componentDidMount() {}

  speak = (phrase) => {
    const synth = window.speechSynthesis
    const utteredPhrase = new SpeechSynthesisUtterance(phrase)

    synth.speak(utteredPhrase)
  }

  render() {
    return (
      <>
        <p>Tap/Click a sight word below to hear it.</p>
        <CardGrid>
          {sightWords.map((word) => (
            <Button onClick={() => this.speak(word)}>{word}</Button>
          ))}
        </CardGrid>
      </>
    )
  }
}
