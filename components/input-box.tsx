import { useState } from 'react'
import styled from 'styled-components'

import { useLocalStorage } from '../hooks/use-local-storage'
import { convertToTitleCase } from '../hooks/use-title-case'

const Container = styled.form`
  width: -webkit-fill-available;
  height: calc(100% - 120px);

  margin: 96px 24px 24px;

  display: grid;
  grid-template-rows: min-content 1fr min-content 1fr min-content min-content;
  grid-template-columns: 1fr 32px 1fr;
  row-gap: 8px;

  & > * {
    z-index: 1;
  }

  & > :not(textarea) {
    font-size: x-small;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--secondary-text);
  }

  & > label {
    grid-row: 1;
    grid-column: 1 / -1;
    justify-self: center;
  }

  & > p {
    grid-row: 6;
    grid-column: 1 / -1;
    justify-self: center;
  }

  textarea {
    background: none;
    border: none;
    resize: none;
    border-radius: 4px;
    padding: 16px;

    font-size: xx-large;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: var(--text);

    margin-top: 16px;
    border: 1px solid transparent;
    transition: all 300ms ease-in-out;

    &:focus,
    &:active {
      outline: none;
      border-color: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.08);
      background: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.04);
    }

    &:hover {
      outline: none;
      background: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.04);
    }
  }

  textarea[id='original-text'] {
    grid-row: 2;
    grid-column: 1 / -1;

    margin-left: 16px;
    margin-right: 16px;
  }

  hr {
    grid-row: 3;
    grid-column: 1 / -1;
    width: -webkit-fill-available;
    height: 1px;
    border: none;
    margin: 0 16px;
    padding: 0;
    background: var(--secondary-text);
    opacity: 0.333;

    transform: translateY(8px);
  }

  textarea[readonly] {
    grid-row: 4;
    grid-column: 1 / -1;

    margin-right: 16px;
    margin-left: 16px;
    user-select: text;
  }

  button {
    grid-row: 5;
    height: 48px;
    min-width: 48px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16.25px;
    padding-bottom: 15.75px;
    margin-bottom: 8px;
    border-radius: 4px;

    background: none;
    border: 1px solid transparent;

    transition: all 300ms ease-in-out;

    &[type='submit'] {
      grid-column: 2;
      justify-self: center;
    }

    &[type='button'] {
      grid-column: 1;
      justify-self: left;
      margin-left: 16px;
    }

    &[type='reset'] {
      grid-column: 3;
      justify-self: right;
      margin-right: 16px;
    }

    &:focus {
      outline: none;
      border-color: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.32);
    }

    &:active {
      outline: none;
      border-color: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.08);
      background: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.04);
      color: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.72);
    }

    &:hover {
      outline: none;
      background: hsla(0, 0%, calc(100% - var(--background-lightness)), 0.04);
    }
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 50%;
    width: clamp(720px, 50%, 1080px);
    height: clamp(540px, 50%, 810px);

    margin: auto;

    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: 1fr 32px 1fr;

    & > label {
      grid-row: 1;
      grid-column: 1;
      justify-self: start;
    }

    & > p {
      grid-row: 1;
      grid-column: 3;
      justify-self: end;
    }

    textarea[id='original-text'] {
      grid-row: 2;
      grid-column: 1;
      margin-right: 0;
    }

    hr {
      grid-row: 2;
      grid-column: 2;

      width: 1px;
      height: auto;
      margin: 16px auto 0;
      transform: none;
    }

    textarea[readonly] {
      grid-row: 2;
      grid-column: 3;
      margin-left: 0;
    }

    button {
      grid-row: 3;
      margin-bottom: 16px;
    }
  }
`

const Background = styled.div`
  grid-area: 2 / 1 / span 4 / span 3;
  background: var(--input-background);
  border: var(--input-border);
  box-sizing: border-box;
  box-shadow: var(--input-box-shadow);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 8px;
  z-index: 0;

  @media screen and (min-width: 768px) {
    grid-area: 2 / 1 / span 2 / span 3;
  }
`

export const InputBox = () => {
  const [text, setText] = useLocalStorage('text', '')
  const [copyText, setCopyText] = useState<'Copy' | 'Copied!'>('Copy')
  // console.log(text)

  const copy = async (value: string) => {
    await navigator.clipboard.writeText(value)
    setCopyText('Copied!')
    setTimeout(() => {
      setCopyText('Copy')
    }, 3000)
  }

  return (
    <Container name='titlecase-input'>
      <label htmlFor='original-text'>Enter Text Below</label>
      <p>{text.length} Characters</p>
      <textarea
        id='original-text'
        name='original-text'
        placeholder='Enter Text Here'
        value={text}
        required
        autoCorrect='true'
        spellCheck
        autoFocus
        minLength={0}
        maxLength={1000}
        onChange={(e): void => setText(e.target.value)}
      />
      <hr />
      <textarea
        readOnly
        title='Converted Text to Titlecase'
        value={convertToTitleCase(text)}
        // onFocus={(e) => e.target.select()}
        onFocus={(e) => setTimeout(() => e.target.select())}
        // onFocus={(e) => setTimeout(() => e.target.setSelectionRange(0, 9999))}
      />
      <button type='button' onClick={() => copy(convertToTitleCase(text))}>
        {copyText}
      </button>
      <button type='submit'>Convert</button>
      <button type='reset' onClick={() => setText('')}>
        Clear
      </button>
      <Background />
    </Container>
  )
}
