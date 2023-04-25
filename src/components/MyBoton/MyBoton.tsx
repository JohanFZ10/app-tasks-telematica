import React from 'react'

interface Props {
  text: string
}
export const MyBoton = ({text}:Props) => {
  const styles = {
    backgroundColor: 'black',
    color: 'white',
    width: '300px',
    heigth: '20px'
  }
  return (
    <button style={styles}>{text}</button>
  )
}
