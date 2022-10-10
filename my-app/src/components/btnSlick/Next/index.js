import React from 'react'

const Next = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  )
}

export default Next