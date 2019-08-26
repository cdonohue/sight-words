import { css, keyframes } from "@emotion/core"
import styled from '@emotion/styled'

import Card, { CardFooter } from "../components/Card"
import Box from "../components/Box"
import { buttonStyles } from "../components/Button"
import Confetti from "react-dom-confetti"

import {
  Mic,
  Radio,
  RefreshCcw,
  AlertTriangle,
} from "react-feather"

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

const spin = keyframes`
  50% {
    transform: scale(1.2);
  }
`

const pulse = keyframes`
  50% {
    box-shadow: 0 0 12px rgba(101, 128, 190, .8);
  }
`

const buttonIconSpin = css`
  svg {
    animation: ${spin} 1s linear infinite;
  }
`

const CircleButton = styled.button`
  ${buttonStyles};
  border-radius: 50%;
  padding: 1rem;
  color: white;
  background: #6580be;

  ${(props) =>
    props.small &&
    `
    padding: .5rem;
    background: #F2F4F8;
    color: #acbbdc;
    svg {
      width: 16px;
      height: 16px;
    }
  `};
`

const Spacer = styled.div`
  box-shadow: 0 0 0 rgba(101, 128, 190, 0);
  transition: 0.2s ease;
  background: #dfe4f1;
  height: 1px;
  ${(props) => {
    if (props.isAnimating) {
      return `
        animation: ${pulse} 1s linear infinite;
      `
    }
  }};
`

export default class QuizPage extends React.Component {
  state = {
    randomWord: "",
    isListening: false,
    isSuccess: false,
    speechRecognition: true,
  }

  setWord = () => {
    const randomWord =
      sightWords[Math.floor(Math.random() * (sightWords.length - 1))]

    this.setState({
      randomWord,
      isListening: false,
      isSuccess: false,
    })
  }

  componentDidMount() {
    this.setWord()

    this.synth = window.speechSynthesis
    this.phrase = new SpeechSynthesisUtterance()

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      return this.setState({
        speechRecognition: false,
      })
    }

    this.recognition = new SpeechRecognition()

    // this.recognition.continuous = true
    // this.recognition.interimResults = true

    this.recognition.onstart = () => {
      this.setState({
        isListening: true,
      })
    }

    this.recognition.onend = () => {
      this.setState({
        isListening: false,
      })
    }

    this.recognition.onresult = (e) => {
      const text = e.results[0][0].transcript

      if (e.results[0].isFinal) {
        if (text.includes(this.state.randomWord)) {
          this.speak("Correct!")
          setTimeout(() => {
            this.setWord()
          }, 1000)
          return this.setState({
            isSuccess: true,
          })
        }

        this.speak("Try again")
      }
    }
  }

  speak = (phrase) => {
    this.phrase.text = phrase
    this.synth.speak(this.phrase)
  }

  record = () => {
    this.recognition.start()
  }

  handleClick = () => {
    this.record()
  }

  render() {
    const { randomWord, isListening, isSuccess, speechRecognition } = this.state

    return (
      <>
        <p>
          Press the button below and speak the sight word shown into your
          microphone.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateY(200px)",
          }}
        >
          <Confetti active={isSuccess} />
        </div>
        <Card>
          {speechRecognition && (
            <>
              <Box>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CircleButton small onClick={this.setWord}>
                    <RefreshCcw />
                  </CircleButton>
                  <Mic style={{ color: "#F2F4F8", margin: ".2rem" }} />
                </div>

                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "6rem",
                    height: "6rem",
                    margin: "1.5rem 0",
                  }}
                >
                  {randomWord}
                </h1>
                <small
                  style={{
                    display: "block",
                    margin: "0 auto",
                    padding: ".25rem",
                    maxWidth: "10rem",
                    textAlign: "center",
                    transition: ".2s ease-in",
                    background: "#dfe4f1",
                    borderRadius: "16px",
                    opacity: isListening ? "0.85" : 0,
                  }}
                >
                  Listening...
                </small>
                <span
                  style={{
                    display: "block",
                    margin: "0 auto",
                    padding: ".25rem",
                    maxWidth: "10rem",
                    textAlign: "center",
                    transition: ".2s ease-in",
                    color: "#3CB371",
                    textShadow: "none",
                    fontWeight: 400,
                    background: "transparent",
                    borderRadius: "16px",
                    opacity: isSuccess ? "1" : 0,
                  }}
                >
                  Correct!
                </span>
              </Box>
              <CardFooter>
                <Spacer isAnimating={isListening} />
                <CircleButton
                  className={isListening ? buttonIconSpin : ""}
                  onClick={this.handleClick}
                >
                  <Radio />
                </CircleButton>
                <Spacer isAnimating={isListening} />
              </CardFooter>
            </>
          )}
          {!speechRecognition && (
            <Box>
              <AlertTriangle
                style={{ width: "16px", transform: "translateY(6px)" }}
              />{" "}
              This browser does not support speech recognition from a
              microphone.
            </Box>
          )}
        </Card>
      </>
    )
  }
}
