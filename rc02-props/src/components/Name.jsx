import React from 'react'

const Name = (props) => {
console.log(props);
  return (
    <div>
        <p>Hello {props.name}</p>
    </div>
  )
}

export default Name