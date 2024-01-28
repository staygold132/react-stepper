import React from 'react'

import logo from '../assets/logo.jpeg'

import './ContainerHeader.scss'

interface IProps {
  title?: string
}

const ContainerHeader = ({ title }: IProps) => {
  return (
    <>
      <div className="app-survey-header-component__logo">
        <img src={logo} alt="Douglas Logo" className="app-survey-header-component__logo-img" />
      </div>
      {title && (
        <div className="app-survey-header-component__header">
          <div className="app-survey-header-component__header-title">{title}</div>
        </div>
      )}
    </>
  )
}

export default ContainerHeader
