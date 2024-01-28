import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Stepper from '@keyvaluesystems/react-stepper'

import ContainerComponent from '../components/ContainerComponent'
import ContainerHeader from '../components/ContainerHeader'

import './Survey.scss'

import stepsData from '../data/steps.json'
import StepComponent from '../components/StepComponent'

const Survey = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const currentStepData = stepsData[currentStep.toString() as keyof typeof stepsData]
  const navigate = useNavigate()

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

  const handleSubmit = () => {
    navigate('/survey-complete')
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
          <StepComponent
            currentStep={currentStep}
            stepData={currentStepData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            handleSubmit={handleSubmit}
          />
        </div>
      </ContainerComponent>
    </div>
  )
}

export default Survey
