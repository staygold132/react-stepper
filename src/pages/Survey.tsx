import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Stepper from '@keyvaluesystems/react-stepper'

import ContainerComponent from '../components/ContainerComponent'
import ContainerHeader from '../components/ContainerHeader'

import './Survey.scss'

import defaultQuestion from '../data/defaultQuestion.json'
import questionsData from '../data/questions.json'
import StepComponent from '../components/StepComponent'

const Survey = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const [currentQuestion, setCurrentQuestion] = useState(defaultQuestion)

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

  const handleNextStep = (nextQuestion: string) => {
    const nextQuestionData = questionsData.find(({ id }) => id === nextQuestion)
    setCurrentQuestion(nextQuestionData as typeof defaultQuestion)
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = (prevQuestion: string) => {
    const prevQuestionData = questionsData.find(({ id }) => id === prevQuestion)
    setCurrentQuestion(prevQuestionData as typeof defaultQuestion)
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
            question={currentQuestion}
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
