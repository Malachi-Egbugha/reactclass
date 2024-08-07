import React from 'react'

import "./InputContent.css"

export default function InputContent(props) {
    const {type,placeholder,icon} = props;
  return (
    <div className='inputcontent'>
    <div className='iconcontainer'>
    {icon}
      </div>
      <input type={type} placeholder={placeholder} className='inputtext'/>

  </div>
  )
}
