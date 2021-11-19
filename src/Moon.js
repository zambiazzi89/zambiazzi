export const Moon = ({ scrollY, skyColor }) => {
  const x = `${450 + scrollY / 10}`

  return (
    <>
      <circle
        cx={x}
        cy="137"
        r="21"
        fill={
          scrollY < 400
            ? `rgb(${30 + scrollY / 15},${26 + scrollY / 18},${
                29 + scrollY / 8
              })`
            : 'url(#MoonGradient)'
        }
      />
      <defs>
        <linearGradient id="MoonGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="grey" stopOpacity="1" />
          <stop offset="100%" stopColor={skyColor} stopOpacity="1" />
        </linearGradient>
      </defs>
    </>
  )
}
