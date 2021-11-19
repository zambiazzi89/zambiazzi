import { StarsArray } from './StarsArray'

export const Stars = ({ rotateX }) => {
  return StarsArray.map((star, i) => (
    <circle
      className={`star-type-${star[0]}`}
      key={`star-${i}`}
      cx={`1786` * star[1] - rotateX}
      cy={`1000` * star[2] - rotateX / 2}
      r={`2` * star[3]}
      fill="grey"
    />
  ))
}
