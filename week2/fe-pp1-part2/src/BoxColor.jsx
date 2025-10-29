const BoxColor = ({ r, g, b }) => {
  const hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '300px',
        height: '100px',
        margin: '10px auto',
        textAlign: 'center',
        lineHeight: '100px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        border: ' solid black',
      }}
    >
      rgb({r},{g},{b}) {hex}
    </div>
  )
}

export default BoxColor
