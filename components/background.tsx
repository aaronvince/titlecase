import styled from 'styled-components'
import { AnimatedCircle } from './animated-circle'

const BackgroundSVG = styled.svg`
  opacity: 0.3;

  @media (prefers-color-scheme: dark) {
    & > circle {
      mix-blend-mode: screen;
    }
  }

  @media (prefers-color-scheme: light) {
    & > circle {
      mix-blend-mode: multiply;
    }
  }
`

type Props = {
  width: number
  height: number
}

export const Background = ({ width, height }: Props) => (
  <BackgroundSVG
    viewBox={`0 0 ${width} ${height}`}
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      {/* https://larsenwork.com/easing-gradients/ */}
      {['Gradient1', 'Gradient2', 'Gradient3'].map((id, index) => (
        <radialGradient id={id} key={index}>
          {[
            { offset: 0, stopOpacity: 1 },
            { offset: 0.081, stopOpacity: 0.987 },
            { offset: 0.155, stopOpacity: 0.951 },
            { offset: 0.225, stopOpacity: 0.896 },
            { offset: 0.29, stopOpacity: 0.825 },
            { offset: 0.353, stopOpacity: 0.741 },
            { offset: 0.412, stopOpacity: 0.648 },
            { offset: 0.471, stopOpacity: 0.55 },
            { offset: 0.529, stopOpacity: 0.45 },
            { offset: 0.588, stopOpacity: 0.352 },
            { offset: 0.647, stopOpacity: 0.259 },
            { offset: 0.71, stopOpacity: 0.175 },
            { offset: 0.775, stopOpacity: 0.104 },
            { offset: 0.845, stopOpacity: 0.049 },
            { offset: 0.919, stopOpacity: 0.013 },
            { offset: 1, stopOpacity: 0 },
          ].map((value, i) => (
            <stop
              offset={value.offset}
              stopColor={`var(--colour${index + 1})`}
              stopOpacity={value.stopOpacity}
              key={i}
            />
          ))}
        </radialGradient>
      ))}
    </defs>
    {['#Gradient1', '#Gradient2', '#Gradient3'].map((circleId, index) => (
      <AnimatedCircle key={index} id={circleId} width={width} height={height} />
    ))}
  </BackgroundSVG>
)
