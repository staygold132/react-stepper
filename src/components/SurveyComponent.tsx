import React, { useState } from 'react'
import classNames from 'classnames'
import Stepper from '@keyvaluesystems/react-stepper'

import AppButton from './AppButton'
import ContainerComponent from './ContainerComponent'
import ContainerHeader from './ContainerHeader'

import './SurveyComponent.scss'

import stepsData from '../data/steps.json'
import StepComponent from './StepComponent'

const SurveyComponent = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const currentStepData = stepsData[currentStep.toString() as keyof typeof stepsData]

  const footerClasses = classNames('app-survey-component__footer', {
    'app-survey-component__footer--alight-right': currentStep === 1,
    'app-survey-component__footer--alight-center': currentStep === 5,
  })

  const steps = [
    {
      stepLabel: 'Step 1',
      completed: false,
    },
    {
      stepLabel: 'Step 2',
      completed: false,
    },
    {
      stepLabel: 'Step 3',
      completed: false,
    },
    {
      stepLabel: 'Step 4',
      completed: false,
    },
    {
      stepLabel: 'Step 5',
      completed: false,
    },
  ]

  const styles = {
    InactiveLineSeparator: () => ({
      backgroundColor: '#a61a57',
    }),
    InActiveNode: () => ({
      background: '#000',
    }),
    ActiveNode: () => ({
      backgroundColor: '#a61a57',
    }),
    LabelTitle: () => ({
      display: 'none',
    }),
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="app-survey-component">
      <ContainerComponent>
        <ContainerHeader title="Customer Survey" />
        <div className="app-survey-component__ribbon"></div>
        <Stepper
          currentStepIndex={currentStep - 1}
          orientation="horizontal"
          labelPosition="top"
          steps={steps}
          styles={styles}
        ></Stepper>
        <div className="app-survey-component__content">
          <StepComponent currentStep={currentStep} stepData={currentStepData} />
        </div>
        <div className="app-survey-component__ribbon"></div>
        <div className={footerClasses}>
          {currentStep > 1 && currentStep < 5 && <AppButton onClick={handlePreviousStep}>Previous Step</AppButton>}
          {currentStep < 5 && <AppButton onClick={handleNextStep}>Next Step</AppButton>}
          {currentStep === 5 && <AppButton>Submit</AppButton>}
        </div>
      </ContainerComponent>
    </div>
  )
}

export default SurveyComponent
