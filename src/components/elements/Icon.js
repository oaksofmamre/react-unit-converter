import React from 'react'

const Icon = ({iconName, className}) => (
  <span
    className={`glyphicon glyphicon-${iconName} ${className}`}
    aria-hidden="true"></span>
)

export default Icon
