import React from 'react'
import './AppButton.scss'

interface IProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const AppButton = (props: IProps) => {
  return (
    <button className="app-button" disabled={props.disabled} onClick={props.onClick}>
      <div className="app-button-text">{props.children}</div>
    </button>
  )
}

export default AppButton
