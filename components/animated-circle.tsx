import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

type AnimatedCircleProps = {
  id: string
  width: number
  height: number
}

export const AnimatedCircle = ({ id, width, height }: AnimatedCircleProps) => {
  const [startingCoordinates, setStartingCoordinates] = useState({
    cx: `${Math.random() * 150 - 25}%`,
    cy: `${Math.random() * 150 - 25}%`,
    r: Math.random(), // Math.abs(width - height) * Math.random() + Math.min(width, height)
  })
  const [endingCoordinates, setEndingCoordinates] = useState({
    cx: `${Math.random() * 150 - 25}%`,
    cy: `${Math.random() * 150 - 25}%`,
    r: Math.random(),
  })

  const {
    cx: cx,
    cy: cy,
    r: r,
  } = useSpring({
    // reset: true,
    from: {
      cx: startingCoordinates.cx,
      cy: startingCoordinates.cy,
      r: startingCoordinates.r,
    },
    cx: endingCoordinates.cx,
    cy: endingCoordinates.cy,
    r: endingCoordinates.r,
    config: { mass: 1, tension: 1, friction: 5 },
    onRest: () => (
      setStartingCoordinates(endingCoordinates),
      setEndingCoordinates({
        cx: `${Math.random() * 150 - 25}%`,
        cy: `${Math.random() * 150 - 25}%`,
        r: Math.random(),
      })
    ),
  })

  return (
    <animated.circle
      cx={cx} // '100%'
      cy={cy} // '0%'
      r={r.to(
        (x) => (Math.abs(width - height) * x + Math.min(width, height)) / 1.5,
      )} // r={Math.min(width, height) / 2}
      fill={`url(${id})`}
    />
  )
}
