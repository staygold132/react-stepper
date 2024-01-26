import React from 'react'
import ContainerComponent from './ContainerComponent'
import logo from '../assets/logo.jpeg'
import './SurveyComponent.scss'

const SurveyComponent = () => {
  return (
    <div className="app-survey-component">
      <ContainerComponent>
        <div className="app-survey-component__logo">
          <img src={logo} alt="Douglas Logo" className="app-survey-component__logo-img" />
        </div>
        <div className="app-survey-component__header">
          <div className="app-survey-component__header-title">Customer Survey</div>
        </div>
        <div className="app-survey-component__ribbon"></div>
      </ContainerComponent>
    </div>
  )
}

export default SurveyComponent
