import React from 'react'
import './ContainerComponent.scss'

interface IProps {
  children?: React.ReactNode
}

const ContainerComponent = (props: IProps) => {
  return (
    <div className="app-container-component">
      {props.children && <div className="app-container-component__body">{props.children}</div>}
    </div>
  )
}

export default ContainerComponent
